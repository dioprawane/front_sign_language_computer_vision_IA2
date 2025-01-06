# Frontend - Reconnaissance de la Langue des Signes avec Vision par Ordinateur

Voici l'application **frontend** pour le système de **reconnaissance de la langue des signes** utilisant la **vision par ordinateur**. Le **frontend** utilise le flux vidéo **WebRTC** au lieu d'OpenCV qui marche qu'en local. Ainsi, pour pouvoir déployer notre application, j'ai trouvé cette alternative. Cette application permet un flux vidéo en temps réel afin de détecter les gestes et de les convertir en texte. Elle communique avec un backend Flask pour effectuer la reconnaissance des gestes grâce à un modèle de réseaux neurones.

---

## 📋 Fonctionnalités

- **Flux Vidéo en Temps Réel** : Diffusion vidéo via WebRTC directement dans le navigateur.
- **Reconnaissance des Gestes** : Détection des gestes des mains et conversion en caractères ou phrases.
- **Interface Interactive** : Affiche les caractères détectés, le mot en cours et la phrase complète.
- **Options de Contrôle** : Possibilité de mettre en pause, réinitialiser et gérer le processus de reconnaissance via des boutons ou des raccourcis clavier.
- **Support Cross-Origin** : Compatible avec les requêtes CORS pour communiquer avec le backend déployé.

---

## 🚀 Utiles

- **Frontend** : [Lien vers le repo Git du frontend](https://github.com/dioprawane/front_sign_language_computer_vision_IA2)
- **Frontend déployé** : [Lien vers le front déployé sur Render](https://front-sign-language-computer-vision-ia2.onrender.com/)
- **Backend** : [Lien vers le repo Git du backend](https://github.com/dioprawane/sign_language_computer_vision_IA2)

---

## 📂 Structure du Projet

```plaintext
|── public/
|    ├── index.html          # Fichier HTML principal de l'application
|    ├── scripts/
|    │   ├── app.js           # Fichier JavaScript pour la gestion de la vidéo et la communication avec le backend
|    ├── styles/
|    │   ├── style.css        # Fichier CSS pour le style de l'interface
├── .gitignore           # Fichiers ignorés par Git
├── README.md            # Documentation du dépôt
```

---

## ⚙️ Instructions d'Installation

### 1️⃣ Cloner le Dépôt
```bash
git clone https://github.com/dioprawane/front_sign_language_computer_vision_IA2.git
cd front_sign_language_computer_vision_IA2
```

### 2️⃣ Ouvrir le Frontend
Vous pouvez exécuter l'application localement à l'aide d'un serveur local (par exemple, l'extension **Live Server** de VS Code ou un serveur HTTP Python).

#### Avec le serveur HTTP de Python
```bash
python -m http.server 5500
```
Ensuite, ouvrez votre navigateur et accédez à :
```
http://127.0.0.1:5500/front_sign_language_computer_vision_IA2/public/index.html
```

---

## 🛠 Intégration avec le Backend

Pour connecter le frontend au backend :
1. Mettez à jour la variable **`backendUrl`** dans `public/index.html` avec l'URL du backend :
   ```javascript
   const backendUrl = 'http://127.0.0.1:5000';
   ```
2. Lancer le **`serveur`** `Python Flask` avec ces étapes :
   1. Clonez le dépôt du backend :
   ```bash
   git clone https://github.com/dioprawane/sign_language_computer_vision_IA2.git
   cd sign_language_computer_vision_IA2
   ```
    2. Créez un environnement virtuel :
    ```bash
    python -m venv venv
    source venv/bin/activate  # Sous Windows : venv\Scripts\activate
    ```
    3. Installez les dépendances :
    ```bash
    pip install -r requirements.txt
    ```
    4. Lancez le script **app.py** :
    ```bash
    python app.py
    ```
---

## 🖥 Raccourcis Clavier

- **R** : Réinitialiser le processus de reconnaissance.
- **P** : Mettre en pause le processus de reconnaissance.
- **Q** : Quitter et afficher la phrase finale.
- **Espace** : Ajouter un espace à la phrase en cours.
- **.** : Ajouter un point final à la phrase.

---

## 🎨 Aperçu de l'Interface

- **Section Gauche** : Flux vidéo en temps réel (WebRTC) pour capturer les gestes.
- **Section Droite** : Affiche les caractères détectés, le mot en cours, et la phrase complète.
- **Boutons** : Options de contrôle pour mettre en pause, réinitialiser, arrêter, et d'autres actions.

---

## 🎥 WebRTC

**WebRTC (Web Real-Time Communication)** est une technologie (une API standardisée) permettant des communications en temps réel directement entre navigateurs ou applications, sans nécessiter de serveurs intermédiaires pour la transmission des données multimédia (audio, vidéo ou données).

### APIs Principales de WebRTC
WebRTC repose sur trois API principales :
- **MediaStream** :  
  Permet de capturer des flux audio et vidéo d'une caméra, d'un micro ou d'autres périphériques multimédia.
  
- **RTCPeerConnection** :  
  Gère la connexion P2P, l'échange des données audio, vidéo et autres messages en temps réel.
  
- **RTCDataChannel** :  
  Facilite le transfert de données non multimédia, comme le texte ou les fichiers, entre les pairs.

### Avantages de WebRTC
- **Latence Faible** : Communication directe entre pairs.
- **Open Source** : Fournit une solution gratuite et extensible.
- **Interopérabilité** : Fonctionne de manière transparente entre différents navigateurs et plateformes.

Pour pallier le fait que le flux vidéo OpenCV ne fonctionne pas quand on déploie l'application en ligne sur un serveur, j'ai utilisé à la place **WebRTC** déployable.

Pour plus d'informations, voir ce [lien](https://webrtc.org/?hl=fr)

---

## 👨‍💻 Auteur

[Serigne Rawane Diop](https://github.com/dioprawane)  
**Etudiant en Master 2 MIAGE parcours IA2**  
**Apprenti chargé d'études statistiques et développeur en C# à l'Urssaf Caisse Nationale (Acoss)**  
**Etudiant-entrepreneur**  
N'hésitez pas à me contacter pour toute question ou suggestion !