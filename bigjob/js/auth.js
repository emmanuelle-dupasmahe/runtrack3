// validation email
function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function isLaPlateformeEmail(email) {
    return email.endsWith("@laplateforme.io");
}

// connexion
async function login(email, password) {
    try {
        const response = await fetch('users.json');
        const defaultUsers = await response.json();
        const localUsers = JSON.parse(localStorage.getItem("users")) || [];
        
        const allUsers = [...defaultUsers, ...localUsers];
        const user = allUsers.find(u => u.email === email && u.password === password);

        if (user) {
            // Utilisation de la clé "currentUser"
            sessionStorage.setItem("currentUser", JSON.stringify(user));
            return { success: true };
        }
        return { success: false, message: "Identifiants incorrects" };
    } catch (e) {
        return { success: false, message: "Erreur lors de la lecture des données." };
    }
}

// Écouteur du formulaire de login

document.getElementById('login-form')?.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const errorDiv = document.getElementById('error-message');

    // Réinitialisation de l'affichage
    errorDiv.classList.add('d-none');
    emailInput.classList.remove('is-invalid');
    passwordInput.classList.remove('is-invalid');

    const email = emailInput.value;
    const password = passwordInput.value;

    // Validation visuelle des champs vides ou mauvais format
    if (!isValidEmail(email) || !isLaPlateformeEmail(email)) {
        emailInput.classList.add('is-invalid');
        errorDiv.textContent = "L'adresse email doit être une adresse @laplateforme.io valide.";
        errorDiv.classList.remove('d-none');
        return;
    }

    if (password === "") {
        passwordInput.classList.add('is-invalid');
        return;
    }

    // Appel de la fonction login
    const result = await login(email, password);
    
    if (result.success) {
        window.location.href = "calendar.html";
    } else {
        // Erreur d'identifiants
        errorDiv.textContent = result.message;
        errorDiv.classList.remove('d-none');
        emailInput.classList.add('is-invalid');
        passwordInput.classList.add('is-invalid');
    }
});

    //inscription 
function register(email, password, nom, prenom) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    
    // Vérifier si l'utilisateur existe déjà
    if (users.find(u => u.email === email)) {
        return { success: false, message: "Cet email est déjà utilisé." };
    }

    const newUser = {
        id: Date.now(),
        email: email,
        password: password,
        nom: nom,
        prenom: prenom,
        role: "user" // un nouvel inscrit est un simple utilisateur
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    return { success: true };
}

//écouteur du formulaire

document.getElementById('register-form')?.addEventListener('submit', function(e) {
    e.preventDefault();

    const nom = document.getElementById('reg-nom');
    const prenom = document.getElementById('reg-prenom');
    const email = document.getElementById('reg-email');
    const password = document.getElementById('reg-password');
    const statusDiv = document.getElementById('status-message');

    // Réinitialisation
    statusDiv.classList.add('d-none', 'alert-danger', 'alert-success');
    [nom, prenom, email, password].forEach(el => el.classList.remove('is-invalid'));

    // Vérifications de base
    if (!nom.value || !prenom.value || !password.value) {
        statusDiv.textContent = "Tous les champs sont obligatoires.";
        statusDiv.classList.add('alert-danger', 'd-none'); // On peut aussi utiliser la validation native
        return;
    }

    if (!isValidEmail(email.value) || !isLaPlateformeEmail(email.value)) {
        email.classList.add('is-invalid');
        statusDiv.textContent = "L'email doit être une adresse @laplateforme.io valide.";
        statusDiv.classList.add('alert-danger');
        statusDiv.classList.remove('d-none');
        return;
    }

    const result = register(email.value, password.value, nom.value, prenom.value);

    if (result.success) {
        statusDiv.textContent = "Compte créé avec succès ! Redirection...";
        statusDiv.classList.add('alert-success');
        statusDiv.classList.remove('d-none');
        
        // Petite pause pour laisser l'utilisateur lire le succès avant de rediriger
        setTimeout(() => {
            window.location.href = "calendar.html";
        }, 2000);
    } else {
        statusDiv.textContent = result.message;
        statusDiv.classList.add('alert-danger');
        statusDiv.classList.remove('d-none');
    }
});