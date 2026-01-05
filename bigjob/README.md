📄 Documentation Technique : Système de Présence La Plateforme_
📖 Présentation
Ce projet est une application web Front-end permettant aux étudiants de La Plateforme_ de réserver leur présence dans les locaux. Il intègre un système d'authentification, une gestion de rôles et un backoffice de modération.

🛠️ Technologies utilisées
HTML5 / CSS3 (Design personnalisé avec dégradés).

Bootstrap 5 (Framework CSS pour le responsive).

JavaScript (ES6) (Logique métier et manipulation du DOM).

JSON & LocalStorage (Stockage et gestion des données).

📂 Structure du Projet
Plaintext

/mon-projet
├── assets/
│   └── images/
│       └── logo_plateforme.png  # Logo officiel de l'école
├── js/
│   ├── auth.js                  # Inscription et Connexion
│   └── dashboard.js             # Logique Calendrier et Backoffice
├── users.json                   # Base de données utilisateurs par défaut
├── login.html                   # Page de connexion (Design Premium)
├── register.html                # Page d'inscription (Design Premium)
└── dashboard.html               # Interface utilisateur dynamique
🚀 Installation et Test
Téléchargez l'intégralité des fichiers en conservant la structure des dossiers.

Ouvrez le fichier login.html dans un navigateur web.

Pour tester les différents rôles :

Étudiant : Connectez-vous avec un compte créé via register.html.

Administrateur : Utilisez le compte admin@laplateforme.io défini dans votre fichier users.json.

💡 Points clés de l'interface
Design Harmonisé : Utilisation d'une barre de navigation blanche (bg-white) sur le dashboard pour mettre en valeur le logo original.

Validation de Domaine : Seules les adresses @laplateforme.io sont acceptées.

Sécurité : Protection des pages par vérification de la session active.