<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>La Plateforme</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css"> 
</head>
<body>

    <header class="p-3 bg-dark text-white d-flex justify-content-between align-items-center">
        <h5 class="mb-0">Zupimages</h5>
        <p class="mb-0 me-3">Hébergez vos images en toute simplicité.</p>
        <button class="btn btn-primary">Héberger des Images</button>
    </header>


    <div class="container mt-4">
        <nav class="nav nav border-top border-bottom bg-light w-100">
            <a class="nav-link text-dark" href="#">LPTF</a>
            <a class="nav-link text-dark" href="https://laplateforme.io/">Accueil</a>
            <a class="nav-link text-dark" href="#">Units</a>
            <a class="nav-link text-dark" href="#">Jobs</a>
            <a class="nav-link text-dark" href="#">Skills</a>
        </nav>
    <div class="header-section">
        <h1 class="mb-3 text-center">LaPlateforme_</h1> 
    </div>
    


        <div class="row">
            
            <div class="col-lg-8">
                
                <div class="card mb-4 d-inline-block float-start me-3" style="width: 15rem;">
                                        <img src="papillon_citron.jpg" class="card-img-top" alt="Papillon">
                    <div class="card-body">
                        <h5 class="card-title">Un Papillon</h5>
                        <p class="card-text small">Un papillon, c'est un peu comme une chenille, mais avec des ailes. Ne pas ingérer.</p>
                        <a href="#" class="btn btn-primary d-block" data-bs-toggle="modal" data-bs-target="#papillonModal">Commander votre propre papillon</a>
                    </div>
                </div>

                <div class="mb-4 overflow-hidden article-block bg-light p-4 shadow-sm">
                    <h2>Bonjour, monde !</h2>
                    <p class="fst-italic">Il existe plusieurs visions du terme :</p>
                    <p>le monde est la matière, l'espace et les phénomènes qui nous sont accessibles par les sens, l'expérience ou la raison.</p>
                    <p>Le sens le plus courant désigne notre planète, la Terre, avec ses habitants et son environnement plus ou moins naturel.</p>
                    <p>Le sens étendu désigne l'univers dans son ensemble.</p>
                    
                    <button class="btn btn-danger me-3" onclick="rebooterMonde()">
                    <span id="rebootSpinner" class="spinner-border spinner-border-sm me-2 text-primary" role="status" aria-hidden="true"></span>
                    Rebooter le Monde</button>


                    <nav class="d-inline-block">
                        <ul class="pagination pagination-sm mb-0">
                            <li class="page-item disabled"><a class="page-link" href="#">&laquo;</a></li>
                            <li class="page-item active"><a class="page-link" href="#" onclick="changerPage(1); return false;">1</a></li>
                            <li class="page-item"><a class="page-link" href="#" onclick="changerPage(2); return false;">2</a></li>
                            <li class="page-item"><a class="page-link" href="#" onclick="changerPage(3); return false;">3</a></li>
                            <li class="page-item"><a class="page-link" href="#">&raquo;</a></li>
                        </ul>
                    </nav>
                </div>
            </div>

            <div class="col-lg-4">
                <div class="list-group sidebar-menu shadow-sm">
                    <a href="#" class="list-group-item list-group-item-action active-link border-0 rounded-top">Limbes</a>
                    <a href="#" class="list-group-item list-group-item-action  border-0">Luxure</a>
                    <a href="#" class="list-group-item list-group-item-action  border-0">Gourmandise</a>
                    <a href="#" class="list-group-item list-group-item-action  border-0">Avarice</a>
                    <a href="#" class="list-group-item list-group-item-action  border-0">Colere</a>
                    <a href="#" class="list-group-item list-group-item-action  border-0">Heresie</a>
                    <a href="#" class="list-group-item list-group-item-action  border-0">Violence</a>
                    <a href="#" class="list-group-item list-group-item-action  border-0">Ruse et Tromperie</a>
                    <a href="#" class="list-group-item list-group-item-action  border-0">Trahison</a>
                    <a href="#" class="list-group-item list-group-item-action  border-0 rounded-bottom">Internet Explorer</a>
                </div>
            </div>
        </div>
        
        <h3 class="mt-5 mb-3">Recevez votre copie gratuite d'Internet 2 !</h3>
        
       <div class="install-progress-bar" id="progress-click-area">
            <span class="install-title">+I</span>
            <div class="progress flex-grow-1 mx-2" style="height: 10px;">
                <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" 
                    id="progressBar" 
                    style="width: 50%;" 
                    aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                </div>
            </div>
        <span class="install-title">Installation de AI 9000</span>
    </div>

        <form class="row g-3">
            <div class="col-md-6">
                <div class="mb-3 input-group">
                    <span class="input-group-text">@</span>
                    <input type="text" class="form-control" placeholder="Login">
                </div>
                <div class="mb-3 input-group">
                    <input type="password" class="form-control" placeholder="Mot de Passe">
                    <span class="input-group-text">@example.com</span>
                </div>
                <div class="mb-3">
                    <label for="urlInput" class="form-label small text-muted">URL des Internets 2 et 2.1 Beta</label>
                    <input type="text" class="form-control" id="urlInput">
                </div>
                <div class="mb-3 input-group">
                    <span class="input-group-text">DogeCoin</span>
                    <input type="text" class="form-control" value="00">
                    <span class="input-group-text">.00</span>
                </div>
                <div class="mb-3">
                    <input type="text" class="form-control" value="https://012t.pdf/dklxb/berlusconimkt/">
                </div>
            </div>

            <div class="col-md-6">
                <div class="mb-3">
                    <label for="emailInput" class="form-label small text-muted">Email address</label>
                    <input type="email" class="form-control" id="emailInput">
                    <div class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="passwordInput" class="form-label small text-muted">Password</label>
                    <input type="password" class="form-control" id="passwordInput">
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="checkMeOut">
                    <label class="form-check-label" for="checkMeOut">Check me out</label>
                </div>
                <button type="submit" class="btn btn-primary mt-3">Submit</button>
            </div>
        </form>
</div>
        <div class="row justify-content-center">
            <div class="col-lg-8">
                <div class="link-block shadow-sm">
                    <div class="post-button">
                        <i class="fas fa-times me-1"></i> Post
                    </div>
                    
                    <hr class="mt-4 mb-4">

                    <table class="link-table w-100">
                        <tr>
                            <td>Lien vers l'image :</td>
                            <td><input type="text" class="link-input" value="https://zupimages.net/viewe..."></td>
                        </tr>
                        <tr>
                            <td>Lien direct :</td>
                            <td><input type="text" class="link-input" value="https://zupimages.net/up/2C..."></td>
                        </tr>
                        <tr>
                            <td>BBCode (forum) :</td>
                            <td><input type="text" class="link-input" value="[url=https://zupimages.net/v..."></td>
                        </tr>
                        <tr>
                            <td>HTML (site) :</td>
                            <td><input type="text" class="link-input" value="<a href='https://zupimages..."></td>
                        </tr>
                    </table>

                    <hr class="mt-4">
                </div>
            </div>
    </div>

    <div class="grey-progress-container mt-4 mb-5">
            <div class="progress mb-2" style="height: 8px;"> 
                <div class="progress-bar bg-secondary progress-bar-striped progress-bar-animated" role="progressbar" style="width: 100%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div class="progress" style="height: 8px;">
                <div class="progress-bar bg-secondary progress-bar-striped progress-bar-animated" role="progressbar" style="width: 100%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>

    <button class="btn btn-primary confidentiality-btn">
        <i class="fas fa-star me-2"></i> ⚙️ Confidentialité
    </button>

    <div class="modal fade" id="papillonModal" tabindex="-1" aria-labelledby="papillonModalLabel" aria-hidden="true">
    <div class="modal-dialog">
    <div class="modal-content">
    <div class="modal-header">
    <h5 class="modal-title" id="papillonModalLabel">Commander votre papillon</h5>
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
</div>
    <div class="modal-body">
    <p>Veuillez confirmer l'envoi de votre bon de commande pour un papillon (attention : livraison non garantie).</p>
</div>
    <div class="modal-footer">
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Annuler</button>
    <button type="button" class="btn btn-primary">Confirmer la commande</button>
</div>
</div>
</div>
</div>
<div class="modal fade" id="recapModal" tabindex="-1" aria-labelledby="recapModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="recapModalLabel">Récapitulatif de la Séquence Secrète (DGC)</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div id="recapContent"></div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
      </div>
    </div>
  </div>
</div>
<!--ajout d'un script pour des citations du film Blade Runner-->
    <script>
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

    // --- 3. Fonction pour changer de page (appelée par la pagination) ---
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
            // Calculer la position X du clic par rapport à l'élément
            const rect = clickArea.getBoundingClientRect();
            const clickX = e.clientX - rect.left; 
            
            // Calculer le centre horizontal de l'élément
            const center = rect.width / 2;
            
            // Récupérer la valeur actuelle
            let currentValue = parseInt(progressBar.getAttribute('aria-valuenow'));

            let newValue;

            if (clickX < center) {
                // Clic à GAUCHE : Décrémenter (régresser)
                newValue = currentValue - step;
            } else {
                // Clic à DROITE : Incrémenter (progresser)
                newValue = currentValue + step;
            }

            // Assurer que la valeur reste entre 0 et 100
            newValue = Math.max(0, Math.min(100, newValue));
            
            // Mettre à jour l'affichage et les attributs
            progressBar.style.width = newValue + '%';
            progressBar.setAttribute('aria-valuenow', newValue);
            
            // Mettre à jour le titre dynamique (optionnel)
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

    // Écouter les frappes de touches sur tout le document
    document.addEventListener('keydown', function(e) {
        // Convertir la touche pressée en majuscule
        const key = e.key.toUpperCase();

        if (key === secretSequence[sequenceIndex]) {
            // Touche correcte dans la séquence
            sequenceIndex++;

            if (sequenceIndex === secretSequence.length) {
                // Séquence DGC COMPLÈTE !
                
                // 1. Collecter les données
                collectAndShowRecap();
                
                // 2. Réinitialiser la séquence pour la prochaine tentative
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
        // 1. Retirer toutes les anciennes classes de couleur
        spinnerColors.forEach(color => {
            spinner.classList.remove(color);
        });

        // 2. Choisir une nouvelle couleur aléatoire
        const randomIndex = Math.floor(Math.random() * spinnerColors.length);
        const nouvelleCouleur = spinnerColors[randomIndex];
        
        // 3. Appliquer la nouvelle couleur
        spinner.classList.add(nouvelleCouleur);
        
        // Optionnel : rendre le spinner visible brièvement
        spinner.style.display = 'inline-block';
        setTimeout(() => {
            // Masquer le spinner après 1 seconde
            spinner.style.display = 'none'; 
        }, 1000); 
    }
}

// --- Écouteur de soumission de formulaire ---
document.addEventListener('DOMContentLoaded', (event) => {
    // ... (votre code existant pour progress bar et DGC) ...

    const submitButton = document.getElementById('submitButton');

    // Cibler le formulaire parent du bouton (le plus sûr est de cibler le bouton et son parent)
    const form = submitButton.closest('form'); 

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault(); // Empêcher l'envoi du formulaire (rechargement de la page)

            const emailInput = document.getElementById('emailInput');
            const passwordInput = document.getElementById('passwordInput');

            // Validation : Les champs ne doivent pas être vides
            const emailValue = emailInput ? emailInput.value.trim() : '';
            const passwordValue = passwordInput ? passwordInput.value.trim() : '';

            if (emailValue !== '' && passwordValue !== '') {
                // Validation réussie
                changerCouleurSpinner();
                
                // Ici, vous pourriez ajouter d'autres actions après la validation (ex: effacer les champs)

            } else {
                // Validation échouée
                alert("Veuillez saisir un Email et un Mot de Passe valides pour valider.");
            }
        });
    }
});

</script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>

</body>
</html>