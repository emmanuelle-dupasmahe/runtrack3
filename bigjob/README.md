📄 Documentation Technique : Système de Présence La Plateforme_
📖 Présentation
Ce projet est une application web de gestion des accès aux locaux, permettant aux étudiants de réserver leurs journées et à l'administration de valider ces demandes.

🛠️ Technologies utilisées
HTML5 / CSS3 (Design personnalisé avec dégradés).

Bootstrap 5 (Framework CSS pour le responsive).

JavaScript (ES6) (Logique métier et manipulation du DOM).

JSON & LocalStorage (Stockage et gestion des données).

📂 Structure du Projet

bigjob/
├── index.html          
├── login.html          
├── register.html       
├── calendar.html       
├── backoffice.html     
├── assets/
│   └── css/style.css   
├── js/
│   ├── auth.js         # Gère Login/Register
│   ├── calendar.js     # Gère l'envoi des demandes (LocalStorage)
│   └── backoffice.js   # Gère la validation (LocalStorage) et les Users
└── data/
    └── users.json      # Comptes par défaut
    └── requests.json   # Comptes par défaut


🛠️ Fonctionnalités
👤 Utilisateurs (Étudiants)
Inscription & Connexion : Accès sécurisé via une adresse @laplateforme.io.

Calendrier de présence : Sélection d'une date et envoi d'une demande d'accès.

Sécurité : Impossible de réserver une date passée.

🛡️ Staff (Modérateurs)
Validation : Accès à une interface de modération pour approuver ou refuser les demandes de présence en temps réel.

🔑 Administrateur
Gestion complète : Accès au Backoffice pour gérer les comptes utilisateurs.

Droits d'accès : Possibilité de promouvoir un utilisateur au rang de modérateur ou de supprimer un compte local.

💾 Gestion des Données
Pour répondre aux contraintes techniques tout en offrant une expérience interactive :

Fichier JSON (users.json) : Sert de base de données initiale pour les comptes "système".

LocalStorage : Utilisé pour stocker les nouveaux inscrits et les demandes de présence (requests), permettant de simuler une base de données dynamique sans serveur backend.

SessionStorage : Utilisé pour maintenir la session de l'utilisateur connecté (currentUser) et sécuriser l'accès aux pages.

🔧 Installation
Clonez ou téléchargez le dossier bigjob/.

Ouvrez le fichier index.html dans votre navigateur (via un serveur local comme Live Server sur VS Code pour une gestion optimale des fichiers JSON).

Comptes de test (JSON) :

Admin : admin@laplateforme.io / admin

Modo : modo@laplateforme.io / modo

🎨 Choix Design

Utilisation d'un dégradé de fond avec le bleu de la plateforme

Design Mobile First avec Bootstrap 5.

Interface intuitive avec une barre de navigation dynamique qui s'adapte au rôle de l'utilisateur.