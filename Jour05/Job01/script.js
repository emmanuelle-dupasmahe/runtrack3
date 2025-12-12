// Fonction pour afficher un message d'erreur
const displayError = (elementId, message) => {
    const errorElement = document.getElementById(`error-${elementId}`);
    if (errorElement) {
        //classe 'is-invalid' de Bootstrap qui va envoyer des messages en rouge
        document.getElementById(elementId).classList.add('is-invalid');
        errorElement.textContent = message;
    }
};

// Fonction pour effacer un message d'erreur et le style d'erreur
const clearError = (elementId) => {
    const errorElement = document.getElementById(`error-${elementId}`);
    if (errorElement) {
        document.getElementById(elementId).classList.remove('is-invalid');
        errorElement.textContent = '';
    }
};



// Nom et Prénom
const validateName = (inputElement) => {
    const value = inputElement.value.trim();
    // Regex : accepte les lettres (majuscules/minuscules), les tirets et les espaces, minimum 2 caractères et maximum 50 caractères.
    const nameRegex = /^[a-zA-ZÀ-ÿ\s-]{2,50}$/; 


    if (value === "") {
        displayError(inputElement.id, 'Ce champ est obligatoire.');
        return false;
    }
    if (!nameRegex.test(value)) {
        displayError(inputElement.id, 'Format invalide. Utilisez uniquement des lettres, des tirets et des espaces (min. 2 caractères).');
        return false;
    }
    clearError(inputElement.id);
    return true;
};

//Email
const validateEmail = (inputElement) => {
    const value = inputElement.value.trim();
    // Regex standard pour une validation d'email de base
    const emailRegex = /^[\w.-]+@[\w.-]+\.[a-z]{2,}$/i; 

    if (value === "") {
        displayError(inputElement.id, 'L\'adresse email est obligatoire.');
        return false;
    }
    if (!emailRegex.test(value)) {
        displayError(inputElement.id, 'Veuillez saisir une adresse email valide (ex: utilisateur@domaine.com).');
        return false;
    }
    clearError(inputElement.id);
    return true;
};

// Mot de passe 
const validatePassword = (passwordElement) => {
    const value = passwordElement.value;
    //regex mot de passe qui doit contenir au moins 1 majuscule
    //au moins 1 minuscule
    //au moins 1 chiffre 
    //pas moins de 12 caractères recommandations de l'ANSSI
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{12,}$/

    if (value === "") {
        displayError(passwordElement.id, 'Le mot de passe est obligatoire.');
        return false;
    }
    if (!passwordRegex.test(value)) {
        displayError(passwordElement.id, 'Le mot de passe doit contenir : 12 caractères minimum (ANSSI), 1 Majuscule, 1 minuscule, 1 chiffre et 1 caractère spécial.');
        return false;
    }
    clearError(passwordElement.id);
    return true;
};

// Confirmation du mot de passe
const validatePasswordCompare = (passwordCompareElement) => {
    const password = document.getElementById('password').value;
    const passwordCompare = passwordCompareElement.value;

    if (passwordCompare === "") {
        displayError(passwordCompareElement.id, 'Veuillez confirmer votre mot de passe.');
        return false;
    }
    if (password !== passwordCompare) {
        displayError(passwordCompareElement.id, 'Les mots de passe ne correspondent pas.');
        return false;
    }
    clearError(passwordCompareElement.id);
    return true;
};

// Validation de l'adresse
const validateAdresse = (inputElement) => {
    const value = inputElement.value.trim();
    // Regex pour adresse : lettres, chiffres, espaces, virgules et tirets. Minimum 5 caractères.
    const adresseRegex = /^[A-Za-z0-9\s, -]{5,}$/; 


    if (value === "") {
        displayError(inputElement.id, 'L\'adresse est obligatoire.');
        return false;
    }
    if (!adresseRegex.test(value)) {
        displayError(inputElement.id, 'Veuillez saisir une adresse valide (min. 5 caractères).');
        return false;
    }
    clearError(inputElement.id);
    return true;
};

// Validation du code postal
const validateCodePostal = (inputElement) => {
    const value = inputElement.value.trim();
    // Regex stricte : Doit être exactement 5 chiffres
    const cpRegex = /^[0-9]{5}$/; 

    if (value === "") {
        displayError(inputElement.id, 'Le code postal est obligatoire.');
        return false;
    }
    if (!cpRegex.test(value)) {
        displayError(inputElement.id, 'Le code postal doit être composé exactement de 5 chiffres.');
        return false;
    }
    clearError(inputElement.id);
    return true;
};


const form = document.getElementById('form');
const nom = document.getElementById('nom');
const prenom = document.getElementById('prenom');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordCompare = document.getElementById('passwordCompare');
const adresse = document.getElementById('adresse');
const codepostal = document.getElementById('codepostal');


// Fonction d'écoute générique pour l'événement 'blur' permet d'éviter de répéter
// addEventListener pour nom, prenom etc. on ne le fait qu'une seule fois...
const addValidationListener = (element, validationFunction) => {
    element.addEventListener('blur', () => validationFunction(element));
    // Pour les champs qui doivent être vérifiés en temps réel (comme la confirmation de mot de passe)
    if (element === passwordCompare) {
        element.addEventListener('input', () => validationFunction(element));
    }
};

addValidationListener(nom, validateName);
addValidationListener(prenom, validateName);
addValidationListener(email, validateEmail);
addValidationListener(password, validatePassword);
addValidationListener(passwordCompare, validatePasswordCompare);
addValidationListener(adresse, validateAdresse);
addValidationListener(codepostal, validateCodePostal);



form.addEventListener('submit', (event) => {
    event.preventDefault(); // Fait ce que je veux

    // Lancer toutes les validations pour s'assurer que l'état final est correct
    const isNomValid = validateName(nom);
    const isPrenomValid = validateName(prenom);
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);
    const isPasswordCompareValid = validatePasswordCompare(passwordCompare);
    const isAdresseValid = validateAdresse(adresse);
    const isCodePostalValid = validateCodePostal(codepostal);

    // Vérifier si toutes les validations sont passées
    if (isNomValid && isPrenomValid && isEmailValid && isPasswordValid && 
        isPasswordCompareValid && isAdresseValid && isCodePostalValid) {
        
        console.log('Formulaire prêt à être envoyé au serveur (Requête asynchrone / AJAX)');
        alert('Inscription réussie côté client ! (Simulé)');

        
    } else {
        alert('Veuillez corriger les erreurs indiquées dans le formulaire avant de soumettre.');
    }
    
});
const setupPasswordToggle = (inputId, buttonId) => {
    const passwordInput = document.getElementById(inputId);
    const toggleButton = document.getElementById(buttonId);

    if (toggleButton && passwordInput) {
        toggleButton.addEventListener('click', () => {
            // Déterminer le nouveau type
            const isPassword = passwordInput.getAttribute('type') === 'password';
            const newType = isPassword ? 'text' : 'password';

            // Changer l'attribut
            passwordInput.setAttribute('type', newType);

            // Changer l'icône du bouton pour refléter l'état
            if (isPassword) {
                // Le mot de passe est maintenant visible
                toggleButton.innerHTML = '🙈'; 
                toggleButton.setAttribute('title', 'Masquer le mot de passe');
            } else {
                // Le mot de passe est maintenant masqué
                toggleButton.innerHTML = '👁️'; 
                toggleButton.setAttribute('title', 'Afficher le mot de passe');
            }
        });
    }
};

// Application de la fonction pour les deux champs :
// 1. Champ 'Mot de passe'
setupPasswordToggle('password', 'togglePassword'); 

// 2. Champ 'Confirmation Mot de passe'
setupPasswordToggle('passwordCompare', 'togglePasswordCompare');