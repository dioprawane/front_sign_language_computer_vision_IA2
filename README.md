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
Mettez à jour la variable **`backendUrl`** dans `public/index.html` avec l'URL du backend :
   ```javascript
   const backendUrl = 'http://127.0.0.1:5000';
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

## 👨‍💻 Auteur

[Serigne Rawane Diop](https://github.com/dioprawane)  
**Etudiant en Master 2 MIAGE parcours IA2**  
**Apprenti chargé d'études statistiques et développeur en C# à l'Urssaf Caisse Nationale (Acoss)**  
**Etudiant-entrepreneur**  
N'hésitez pas à me contacter pour toute question ou suggestion !