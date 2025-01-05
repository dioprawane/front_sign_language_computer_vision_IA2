// Sélectionner les éléments HTML
const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const statusText = document.getElementById('status-text');

// Configurer le backend URL
const backendUrl = 'https://sign-language-computer-vision-ia2.onrender.com/process_frame'; // Remplacez par l'URL du backend déployé

// Initialiser le flux vidéo
/*async function startVideo() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: false,
    });
    video.srcObject = stream;
    video.play();
    statusText.innerText = "Flux vidéo activé";
    processFrames();
  } catch (error) {
    console.error('Erreur lors de l’accès à la caméra :', error);
    statusText.innerText = "Erreur caméra";
  }
}*/
async function startVideo() {
    const loadingElement = document.getElementById('loading');
    loadingElement.style.display = 'block'; // Affiche le chargement
  
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false,
      });
      video.srcObject = stream;
      video.play();
      loadingElement.style.display = 'none'; // Cache le chargement une fois le flux démarré
      statusText.innerText = "Flux vidéo activé";
      processFrames();
    } catch (error) {
      console.error('Erreur lors de l’accès à la caméra :', error);
      loadingElement.style.display = 'none';
      statusText.innerText = "Erreur caméra";
    }
  }  

// Capturer les frames et les envoyer au backend
function processFrames() {
  const context = canvas.getContext('2d');
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;

  async function sendFrame() {
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    const imageData = canvas.toDataURL('image/jpeg');
  
    try {
      const response = await fetch(backendUrl, {
        method: 'POST',
        body: JSON.stringify({ image: imageData }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        const data = await response.json();
        statusText.innerText = `Détection : ${data.result}`;
      } else {
        console.error('Erreur de réponse du backend');
        statusText.innerText = "Erreur de détection";
      }
    } catch (error) {
      console.error('Erreur lors de l’envoi de la frame :', error);
      statusText.innerText = "Erreur réseau";
    }
  
    // Ajouter un délai avant la prochaine frame (e.g., 100ms)
    setTimeout(() => requestAnimationFrame(sendFrame), 100);
  }  

  sendFrame();
}

// Lancer le flux vidéo
startVideo();