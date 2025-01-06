// Récupération des éléments HTML
const videoElement = document.getElementById('video');
const canvas = document.createElement('canvas');
canvas.width = 640;
canvas.height = 480;
const context = canvas.getContext('2d');

// Démarrage de la webcam + envoi périodique au backend
async function startVideo() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    videoElement.srcObject = stream;

    // Envoie un frame toutes les 600 ms
    setInterval(() => {
      context.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
      const frameData = canvas.toDataURL('image/jpeg');

      fetch(BACKEND_URL + '/webrtc_feed', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ frame: frameData })
      })
      .then(response => response.json())
      .then(data => {
        // "data.annotated_frame" = "data:image/jpeg;base64,..."
        document.getElementById('annotated_img').src = data.annotated_frame;
      })
      .catch(err => console.error('Erreur lors de l’envoi du flux WebRTC:', err));

    }, 1000);

  } catch (err) {
    console.error('Erreur lors de l’accès à la caméra :', err);
  }
}
startVideo();

// Mise à jour de l’état (caractère, mot, phrase) toutes les 600 ms
function updateStatus() {
  fetch(BACKEND_URL + '/get_status')
    .then(response => response.json())
    .then(data => {
      document.getElementById('current_alphabet').textContent = data.current_alphabet || 'N/A';
      document.getElementById('word_buffer').textContent = data.word_buffer || 'N/A';
      document.getElementById('sentence').textContent = data.sentence || 'N/A';
    })
    .catch(error => console.error('Erreur lors de la mise à jour des données:', error));
}
setInterval(updateStatus, 1000);

// Fonctions pour les boutons
function togglePause() {
  fetch(BACKEND_URL + '/toggle_pause', { method: 'POST' })
    .then(response => response.json())
    .then(data => {
      const btn = document.getElementById('pauseButton');
      btn.textContent = data.status === 'paused' ? 'Reprendre' : 'Pause';
    })
    .catch(error => console.error('Erreur togglePause:', error));
}

function reset() {
  fetch(BACKEND_URL + '/reset', { method: 'POST' })
    .catch(error => console.error('Erreur reset:', error));
}

function quitAndShow() {
  fetch(BACKEND_URL + '/quit_and_show', { method: 'POST' })
    .then(response => response.json())
    .then(data => {
      alert('Phrase finale : ' + data.final_sentence);
    })
    .catch(error => console.error('Erreur quitAndShow:', error));
}

function speak() {
  fetch(BACKEND_URL + '/speak', { method: 'POST' })
    .catch(error => console.error('Erreur speak:', error));
}

function removeLast() {
  fetch(BACKEND_URL + '/remove_last', { method: 'POST' })
    .catch(error => console.error('Erreur removeLast:', error));
}

function addSpace() {
  fetch(BACKEND_URL + '/add_space', { method: 'POST' })
    .catch(error => console.error('Erreur addSpace:', error));
}

function addPoint() {
  fetch(BACKEND_URL + '/add_point', { method: 'POST' })
    .catch(error => console.error('Erreur addPoint:', error));
}

// Raccourcis clavier
document.addEventListener('keydown', function (event) {
  switch (event.key) {
    case ' ':
      event.preventDefault(); // Empêche le défilement
      addSpace();
      break;
    case 'r':
      reset();
      break;
    case 'q':
      quitAndShow();
      break;
    case 'p':
      speak();
      break;
    case 's':
      removeLast();
      break;
    case '.':
      addPoint();
      break;
  }
});