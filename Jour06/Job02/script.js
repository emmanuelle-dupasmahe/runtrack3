
    const citationsBladeRunner = [
    // PAGE 1 (Index 0) 
    { titre: "Bonjour, monde !", paragraphe1: "Le monde est la matière, l'espace et les phénomènes qui nous sont accessibles par les sens, l'expérience ou la raison.", paragraphe2: "Le sens le plus courant désigne notre planète, la Terre, avec ses habitants et son environnement plus ou moins naturel." },
    // PAGE 2 (Index 1) -  Citation 1
    { titre: "Améliorer le Modèle", paragraphe1: "Les Réplicants sont comme n'importe quelle autre machine. Ils sont soit un bénéfice, soit un danger. S'ils sont un danger, ils sont éliminés.", paragraphe2: "Nous avons besoin d'êtres plus humains que l'humain." },
    // PAGE 3 (Index 2) -  Citation 2
    { titre: "Le Rebond du Monde", paragraphe1: "Si seulement tu pouvais voir ce que j'ai vu avec tes yeux. Tous ces moments se perdront dans le temps, comme des larmes sous la pluie.", paragraphe2: "Les choses ne se passent pas toujours comme prévu. Il est temps de mourir." }
];

    function rebooterMonde() {
       
        const articleBlock = document.querySelector('.article-block');
        
        // une citation aléatoire
        const randomIndex = Math.floor(Math.random() * citationsBladeRunner.length);
        const citation = citationsBladeRunner[randomIndex];
        
        // mise à jour le contenu HTML
        articleBlock.innerHTML = `
            <h2>${citation.titre}</h2>
            <p>${citation.paragraphe1}</p>
            <p>${citation.paragraphe2}</p>
            
            <button class="btn btn-danger me-3" onclick="rebooterMonde()">Rebooter le Monde</button>
            
            <nav class="d-inline-block">
                <ul class="pagination pagination-sm mb-0">
                    <li class="page-item disabled"><a class="page-link" href="#">&laquo;</a></li>
                    <li class="page-item active"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item"><a class="page-link" href="#">&raquo;</a></li>
                </ul>
            </nav>
        `;
    }

    function getPaginationHTML(activePage) {
        // La pagination est reconstruite à chaque fois, intégrant la classe 'active'
        return `
            <nav class="d-inline-block">
                <ul class="pagination pagination-sm mb-0">
                    <li class="page-item disabled"><a class="page-link" href="#">&laquo;</a></li>
                    <li class="page-item ${activePage === 1 ? 'active' : ''}"><a class="page-link" href="#" onclick="changerPage(1); return false;">1</a></li>
                    <li class="page-item ${activePage === 2 ? 'active' : ''}"><a class="page-link" href="#" onclick="changerPage(2); return false;">2</a></li>
                    <li class="page-item ${activePage === 3 ? 'active' : ''}"><a class="page-link" href="#" onclick="changerPage(3); return false;">3</a></li>
                    <li class="page-item"><a class="page-link" href="#">&raquo;</a></li>
                </ul>
            </nav>
        `;
    }

    // Fonction pour changer de page (appelée par la pagination) 
    function changerPage(pageIndex) {
        // Sélectionne le bloc de contenu
        const articleBlock = document.querySelector('.article-block');
        
        // Récupère la citation correspondante (page 1 -> index 0, etc.)
        const citation = citationsBladeRunner[pageIndex - 1]; 
        
        // Met à jour tout le contenu HTML
        articleBlock.innerHTML = `
            <h2>${citation.titre}</h2>
            <p class="fst-italic">Contenu de la page ${pageIndex} :</p>
            <p>${citation.paragraphe1}</p>
            <p>${citation.paragraphe2}</p>
            
            <button class="btn btn-danger me-3" onclick="rebooterMonde()">Rebooter le Monde</button>
            
            ${getPaginationHTML(pageIndex)} 
        `;
    }
    document.addEventListener('DOMContentLoaded', (event) => {
    const clickArea = document.getElementById('progress-click-area');
    const progressBar = document.getElementById('progressBar');
    const step = 10; // Définir la taille du pas (ex: 10% par clic)

    if (clickArea && progressBar) {
        clickArea.addEventListener('click', function(e) {
            // Calcul de la position X du clic par rapport à l'élément
            const rect = clickArea.getBoundingClientRect();
            const clickX = e.clientX - rect.left; 
            
            // Calcul le centre horizontal de l'élément
            const center = rect.width / 2;
            
            // Récupére la valeur actuelle
            let currentValue = parseInt(progressBar.getAttribute('aria-valuenow'));

            let newValue;

            if (clickX < center) {
                // Clic à GAUCHE : Décrémenter (régresser)
                newValue = currentValue - step;
            } else {
                // Clic à DROITE : Incrémenter (progresser)
                newValue = currentValue + step;
            }

            // Assure que la valeur reste entre 0 et 100
            newValue = Math.max(0, Math.min(100, newValue));
            
            // Met à jour l'affichage et les attributs
            progressBar.style.width = newValue + '%';
            progressBar.setAttribute('aria-valuenow', newValue);
            
            // Met à jour le titre dynamique (optionnel)
            const titleSpan = clickArea.querySelector('span:last-child');
            if (titleSpan) {
                 if (newValue === 100) {
                     titleSpan.textContent = "Installation Terminé !";
                 } else if (newValue === 0) {
                     titleSpan.textContent = "Installation Annulée";
                 } else {
                     titleSpan.textContent = "Installation de AI 9000";
                 }
            }
        });
    }
});
document.addEventListener('DOMContentLoaded', (event) => {
    // Séquence de touches à détecter (D, G, C)
    const secretSequence = ['D', 'G', 'C'];
    let sequenceIndex = 0;

    // Écoute les frappes de touches sur tout le document
    document.addEventListener('keydown', function(e) {
        // Convertir la touche pressée en majuscule
        const key = e.key.toUpperCase();

        if (key === secretSequence[sequenceIndex]) {
            // Touche correcte dans la séquence
            sequenceIndex++;

            if (sequenceIndex === secretSequence.length) {
                // Séquence DGC COMPLÈTE !
                
                // 1. Collecte les données
                collectAndShowRecap();
                
                // 2. Réinitialise la séquence pour la prochaine tentative
                sequenceIndex = 0;
            }
        } else {
            // Touche incorrecte, réinitialiser la séquence
            sequenceIndex = 0;
        }
    });
});

function collectAndShowRecap() {
    
    const login = document.querySelector('.col-md-6 .input-group:nth-child(1) input').value;
    const password = document.querySelector('.col-md-6 .input-group:nth-child(2) input').value;
    const url = document.getElementById('urlInput').value;
    const dogeCoin = document.querySelector('.col-md-6 .input-group:nth-child(4) input').value;
    const longUrl = document.querySelector('.col-md-6 .mb-3:nth-child(5) input').value;

    
    const recapHTML = `
        <table class="table table-striped">
            <thead>
                <tr><th>Champ</th><th>Valeur Saisie</th></tr>
            </thead>
            <tbody>
                <tr><td>Login</td><td>${login || 'Non saisi'}</td></tr>
                <tr><td>Mot de Passe (gauche)</td><td>${password ? '********' : 'Non saisi'}</td></tr>
                <tr><td>URL Beta</td><td>${url || 'Non saisi'}</td></tr>
                <tr><td>DogeCoin</td><td>${dogeCoin || 'Non saisi'}</td></tr>
                <tr><td>URL Longue</td><td>${longUrl || 'Non saisi'}</td></tr>
            </tbody>
        </table>
    `;

    
    document.getElementById('recapContent').innerHTML = recapHTML;

    
    const recapModalElement = document.getElementById('recapModal');
    const bootstrapModal = new bootstrap.Modal(recapModalElement);
    bootstrapModal.show();
}
const spinnerColors = ['text-primary', 'text-secondary', 'text-success', 'text-danger', 'text-warning', 'text-info', 'text-light', 'text-dark'];

// --- Fonction pour changer la couleur aléatoirement ---
function changerCouleurSpinner() {
    const spinner = document.getElementById('rebootSpinner');
    if (spinner) {
        // Retire toutes les anciennes classes de couleur
        spinnerColors.forEach(color => {
            spinner.classList.remove(color);
        });

        // choix d'une nouvelle couleur aléatoire
        const randomIndex = Math.floor(Math.random() * spinnerColors.length);
        const nouvelleCouleur = spinnerColors[randomIndex];
        
        // Applique la nouvelle couleur
        spinner.classList.add(nouvelleCouleur);
        
        // rend le spinner visible 
        spinner.style.display = 'inline-block';
        setTimeout(() => {
            // Masque le spinner après 1 seconde
            spinner.style.display = 'none'; 
        }, 1000); 
    }
}

// Écouteur de soumission de formulaire 
document.addEventListener('DOMContentLoaded', (event) => {
    
    const submitButton = document.getElementById('submitButton');

    
    const form = submitButton.closest('form'); 

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault(); // Empêche l'envoi du formulaire (rechargement de la page)

            const emailInput = document.getElementById('emailInput');
            const passwordInput = document.getElementById('passwordInput');

            // Validation : Les champs ne doivent pas être vides
            const emailValue = emailInput ? emailInput.value.trim() : '';
            const passwordValue = passwordInput ? passwordInput.value.trim() : '';

            if (emailValue !== '' && passwordValue !== '') {
                // Validation réussie
                changerCouleurSpinner();
                
                

            } else {
                // Validation échouée
                alert("Veuillez saisir un Email et un Mot de Passe valides pour valider.");
            }
        });
    }
});