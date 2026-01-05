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
            // Utilisation de ta clé "currentUser"
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
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!isValidEmail(email) || !isLaPlateformeEmail(email)) {
        alert("Email invalide ou domaine non autorisé.");
        return;
    }

    const result = await login(email, password);
    if (result.success) {
        window.location.href = "dashboard.html";
    } else {
        alert(result.message);
    }
});