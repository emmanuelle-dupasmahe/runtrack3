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

// écouteur du formulaire de login

document.getElementById('login-form')?.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    this.classList.add('was-validated');

    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const errorDiv = document.getElementById('error-message');

    // réinitialisation de l'affichage
    errorDiv.classList.add('d-none');
    emailInput.classList.remove('is-invalid');
    passwordInput.classList.remove('is-invalid');

    const email = emailInput.value.trim();
    const password = passwordInput.value;

    // validation visuelle des champs vides ou mauvais format
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

    // appel de la fonction login
    const result = await login(email, password);
    
    if (result.success) {
        window.location.href = "calendar.html";
    } else {
        // si erreur d'identifiants
        this.classList.remove('was-validated');
        errorDiv.textContent = result.message;
        errorDiv.classList.remove('d-none');

        emailInput.classList.add('is-invalid');
        passwordInput.classList.add('is-invalid');
    }
});

    //inscription fonction register

async function register(email, password, nom, prenom) {
    try {
        // on nrécupère les utilisateurs du JSON
        const response = await fetch('users.json');
        const defaultUsers = await response.json();

        // 2on récupère les utilisateurs du LocalStorage
        const localUsers = JSON.parse(localStorage.getItem("users")) || [];
        
        // fusion pour la vérification d'unicité
        const allUsers = [...defaultUsers, ...localUsers];

        // on vérifie si l'utilisateur existe déjà quelque part
        if (allUsers.find(u => u.email === email)) {
            return { success: false, message: "Cet email est déjà utilisé (compte existant ou archive)." };
        }

        const newUser = {
            id: Date.now(),
            email: email,
            password: password,
            nom: nom,
            prenom: prenom,
            role: "user"
        };

        localUsers.push(newUser);
        localStorage.setItem("users", JSON.stringify(localUsers));
        return { success: true };
    } catch (e) {
        return { success: false, message: "Erreur technique lors de l'inscription." };
    }
}

//écouteur du formulaire

document.getElementById('register-form')?.addEventListener('submit', async function(e) {
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

    const result = await register(email.value, password.value, nom.value, prenom.value);

    if (result.success) {
        statusDiv.textContent = "Compte créé avec succès ! Redirection...";
        statusDiv.classList.add('alert-success');
        statusDiv.classList.remove('d-none');


        const userToConnect = {
            id: Date.now(), // meme ID que dans register()
            email: email.value,
            nom: nom.value,
            prenom: prenom.value,
            role: "user"
        };
        sessionStorage.setItem("currentUser", JSON.stringify(userToConnect));
        //petit temps pour passer au calendrier
        setTimeout(() => {
            window.location.href = "calendar.html";
        }, 2000);
    } else {
        statusDiv.textContent = result.message;
        statusDiv.classList.add('alert-danger');
        statusDiv.classList.remove('d-none');
    }
});