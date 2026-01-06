// Récupération de l'utilisateur connecté (Session)
const user = JSON.parse(sessionStorage.getItem("currentUser"));

// Redirection si l'utilisateur n'est pas connecté
if (!user) {
    window.location.href = "login.html";
}

// Fonctions utilitaires
function isPastDate(dateString) {
    const date = new Date(dateString);
    const today = new Date();
    today.setHours(0, 0, 0, 0); // On compare uniquement les jours
    return date < today;
}

function isModerator(user) {
    return user && (user.role === "moderator" || user.role === "admin");
}

// Fonction pour envoyer une demande
function requestPresence() {
    const datePicker = document.getElementById('date-picker');
    const date = datePicker.value;

    if (!date) {
        alert("Veuillez choisir une date.");
        return;
    }

    if (isPastDate(date)) {
        alert("Impossible de réserver une date passée.");
        return;
    }

    // Récupération des demandes existantes dans le LocalStorage
    const requests = JSON.parse(localStorage.getItem("requests")) || [];
    
    // Ajout de la nouvelle demande
    requests.push({
        id: Date.now(),
        userId: user.id,
        userNom: `${user.prenom} ${user.nom}`,
        date: date,
        status: "pending"
    });

    // Sauvegarde
    localStorage.setItem("requests", JSON.stringify(requests));
    alert("Demande envoyée avec succès !");
    
    // On vide le champ date après l'envoi
    datePicker.value = "";
}

// Initialisation de la page au chargement
document.addEventListener('DOMContentLoaded', () => {
    
    // Affichage du nom de l'utilisateur
    const nameDisplay = document.getElementById('user-name');
    if (nameDisplay) {
        nameDisplay.textContent = `${user.prenom} ${user.nom}`;
    }

    // Affichage du lien Backoffice uniquement pour Staff (Modo/Admin)
    const navBackoffice = document.getElementById('nav-backoffice');
    if (navBackoffice && isModerator(user)) {
        navBackoffice.classList.remove('d-none');
    }

    // Sécurité : Empêcher la sélection de dates passées dans le calendrier HTML
    const datePicker = document.getElementById('date-picker');
    if (datePicker) {
        datePicker.min = new Date().toISOString().split("T")[0];
    }

    // Gestion du bouton Déconnexion
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            sessionStorage.removeItem("currentUser");
            window.location.href = "login.html";
        });
    }
});