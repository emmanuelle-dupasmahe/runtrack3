// Fonction pour afficher un message d'erreur
const displayError = (elementId, message) => {
    const errorElement = document.getElementById(`error-${elementId}`);
    if (errorElement) {
        // Ajoute la classe 'is-invalid' de Bootstrap pour styliser l'input en rouge
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



// Nom / Prénom
const validateName = (inputElement) => {
    const value = inputElement.value.trim();
    // Regex : Accepte uniquement les lettres (majuscules/minuscules), les tirets, et les espaces, minimum 2 caractères.
    const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s-]{2,}$/; 

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
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

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
    // Regex stricte : 
    // ^                   Début de la chaîne
    // (?=.*[a-z])         Doit contenir au moins une minuscule
    // (?=.*[A-Z])         Doit contenir au moins une majuscule
    // (?=.*\d)            Doit contenir au moins un chiffre
    // (?=.*[!@#$%^&*])    Doit contenir au moins un caractère spécial (ajustez selon vos besoins)
    // [A-Za-z\d!@#$%^&*]{8,} Doit contenir au moins 8 caractères au total
    // $                   Fin de la chaîne
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

    if (value === "") {
        displayError(passwordElement.id, 'Le mot de passe est obligatoire.');
        return false;
    }
    if (!passwordRegex.test(value)) {
        displayError(passwordElement.id, 'Le mot de passe doit contenir : 8 caractères min., 1 Majuscule, 1 minuscule, 1 chiffre, et 1 caractère spécial.');
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
    // Regex simple : lettres, chiffres, espaces, virgules, et tirets. Minimum 5 caractères.
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
    const cpRegex = /^\d{5}$/; 

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