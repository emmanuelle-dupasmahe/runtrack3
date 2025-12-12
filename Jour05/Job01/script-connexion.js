// Fonction pour afficher un message d'erreur et styliser l'input
const displayError = (elementId, message) => {
    const errorElement = document.getElementById(`error-${elementId}`);
    if (errorElement) {
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

// Validation Email 
const validateEmailConnexion = (inputElement) => {
    const value = inputElement.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

    if (value === "") {
        displayError(inputElement.id, 'L\'adresse email est obligatoire.');
        return false;
    }
    if (!emailRegex.test(value)) {
        displayError(inputElement.id, 'Format d\'email invalide.');
        return false;
    }
    clearError(inputElement.id);
    return true;
};

// Validation Mot de passe 
const validatePasswordConnexion = (passwordElement) => {
    const value = passwordElement.value;
    
    if (value === "") {
        displayError(passwordElement.id, 'Le mot de passe est obligatoire.');
        return false;
    }
    if (value.length < 8) {
        displayError(passwordElement.id, 'Identifiants invalides.'); 
        return false;
    }
    clearError(passwordElement.id);
    return true;
};


const formConnexion = document.getElementById('form-connexion');
const emailConnexion = document.getElementById('email-connexion');
const passwordConnexion = document.getElementById('password-connexion');

// Validation asynchrone lors de la perte de focus (blur)
emailConnexion.addEventListener('blur', () => validateEmailConnexion(emailConnexion));
passwordConnexion.addEventListener('blur', () => validatePasswordConnexion(passwordConnexion));



formConnexion.addEventListener('submit', (event) => {
    event.preventDefault(); //fait ce que je veux

    // Lancer les validations côté client
    const isEmailValid = validateEmailConnexion(emailConnexion);
    const isPasswordValid = validatePasswordConnexion(passwordConnexion);

    // Vérifier si tout est valide
    if (isEmailValid && isPasswordValid) {
        
        console.log('Connexion prête à être envoyée au serveur (Requête asynchrone / AJAX)');
        alert('Validation client réussie ! Envoi des données au serveur...');

        
    } else {
        alert('Veuillez vérifier les champs indiqués.');
    }
});