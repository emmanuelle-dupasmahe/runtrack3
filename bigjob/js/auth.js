// validation email
function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function isLaPlateformeEmail(email) {
    return email.endsWith("@laplateforme.io");
}

// connexion
document.getElementById('login-form')?.addEventListener('submit', async function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // validation
    if (!isValidEmail(email)) {
        alert("Format d'email invalide");
        return;
    }
    if (!isLaPlateformeEmail(email)) {
        alert("Seuls les emails @laplateforme.io sont acceptés");
        return;
    }

    try {
        // Récupérer les utilisateurs par défaut (JSON)
        const response = await fetch('users.json');
        const defaultUsers = await response.json();

        // Récupérer les utilisateurs inscrits via le formulaire (LocalStorage)
        const localUsers = JSON.parse(localStorage.getItem("users")) || [];

        // Fusionner les deux listes pour la vérification
        const allUsers = [...defaultUsers, ...localUsers];

        const user = allUsers.find(u => u.email === email && u.password === password);

        if (user) {
            sessionStorage.setItem('loggedUser', JSON.stringify(user));
            window.location.href = 'dashboard.html';
        } else {
            alert("Identifiants incorrects.");
        }
    } catch (error) {
        console.error("Erreur login:", error);
    }
});

// inscription 
function register(email, password, nom, prenom) {
    if (!isLaPlateformeEmail(email)) {
        return { success: false, message: "Email invalide : domaine @laplateforme.io requis." };
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    
    // Vérifier si l'email existe déjà
    if (users.find(u => u.email === email)) {
        return { success: false, message: "Cet email est déjà utilisé." };
    }

    const newUser = {
        id: Date.now(),
        email, 
        password, 
        nom, 
        prenom,
        role: "user"
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    return { success: true };
}