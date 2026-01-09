📁 oclock/
│
├── 📄 index.html             # Structure principale et navigation
├── 📄 README.md              # Documentation du projet
│
├── 📁 assets/                # Ressources statiques
│   ├── 📁 css/
│   │   └── 📄 style.css      # Les animations (@keyframes) et textures bois
│   ├── 📁 sounds/
│   │   └── 📄 coucou.mp3     # Le cri du coucou
│   └── 📁 images/            # (vide pour l'instant)
│
└── 📁 js/                    # Logique JavaScript séparée
    ├── 📄 horloge.js         # Gestion de l'heure française
    ├── 📄 minuteur.js        # Logique décompte et réglages
    ├── 📄 chrono.js          # Centièmes de seconde et tours (laps)
    └── 📄 reveil.js          # Gestion des alarmes et calcul dynamique

🕰️ Horloge Coucou Digitale

Une application web interactive d'horloge suisse de type "Coucou", construite avec HTML5, Tailwind CSS et JavaScript.

🚀 Fonctionnalités

- Horloge : Affichage de l'heure en temps réel (Format français).
- Minuteur : Réglage précis avec flèches de contrôle et décompte.
- Chronomètre : Précision au centième de seconde avec enregistrement des tours.
- Réveil : Gestion de plusieurs alarmes avec messages personnalisés et calcul du temps restant (secondes/minutes/heures).
- Animation Coucou : wwodstock sort en s'avançant, vibre et chante 3 fois lors des alertes".

🎨 Design
- Habillage en lattes de bois avec texture générée en CSS.
- Balancier animé avec un effet de balancement perpétuel.
- Interface responsive et centrée.

🛠️ Installation
1. Cloner ou télécharger le projet.
2. Placer un fichier `coucou.mp3` dans `assets/sounds/`.
3. Ouvrir `index.html` dans un navigateur moderne.

📂 Organisation des fichiers
- `js/horloge.js` : Gère l'affichage principal.
- `js/minuteur.js` : Gère le décompte.
- `js/chrono.js` : Logique de chronométrage rapide.
- `js/reveil.js` : Système d'alarmes multiples.