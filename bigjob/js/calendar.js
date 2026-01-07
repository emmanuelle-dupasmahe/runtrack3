async function loadRequests() {
    // on récupère ce qui est en LocalStorage (les nouvelles demandes)
    let localRequests = JSON.parse(localStorage.getItem("requests")) || [];
    
    // si le LocalStorage est vide (premier lancement), on peut charger le JSON
    if (localRequests.length === 0) {
        try {
            const response = await fetch('requests.json');
            const defaultRequests = await response.json();
            // on les enregistre en local pour pouvoir les manipuler (approuver/refuser)
            localStorage.setItem("requests", JSON.stringify(defaultRequests));
            return defaultRequests;
        } catch (e) {
            return [];
        }
    }
     return localRequests;
}


// récupération de l'utilisateur connecté (Session)
const user = JSON.parse(sessionStorage.getItem("currentUser"));

// redirection si l'utilisateur n'est pas connecté
if (!user) {
    window.location.href = "login.html";
}

// fonctions utilitaires
function isPastDate(dateString) {
    const date = new Date(dateString);
    const today = new Date();
    today.setHours(0, 0, 0, 0); // On compare uniquement les jours
    return date < today;
}

function isModerator(user) {
    return user && (user.role === "moderator" || user.role === "admin");
}

// fonction pour envoyer une demande
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

    // récupération des demandes existantes dans le LocalStorage
    const requests = JSON.parse(localStorage.getItem("requests")) || [];
    
    // ajout de la nouvelle demande
    requests.push({
        id: Date.now(),
        userId: user.id,
        userName: `${user.prenom} ${user.nom}`,
        date: date,
        status: "pending"
    });

    // sauvegarde
    localStorage.setItem("requests", JSON.stringify(requests));
    alert("Demande envoyée avec succès !");
    
    // on vide le champ date après l'envoi
    datePicker.value = "";
}

// initialisation de la page au chargement
document.addEventListener('DOMContentLoaded', () => {
    
    // affichage du nom de l'utilisateur
    const nameDisplay = document.getElementById('user-name');
    if (nameDisplay) {
        nameDisplay.textContent = `${user.prenom} ${user.nom}`;
    }

    // affichage du lien Backoffice uniquement pour le Staff (Modo/Admin)
    const navBackoffice = document.getElementById('nav-backoffice');
    if (navBackoffice && isModerator(user)) {
        navBackoffice.classList.remove('d-none');
    }

    // empêcher la sélection de dates passées dans le calendrier HTML
    const datePicker = document.getElementById('date-picker');
    if (datePicker) {
        datePicker.min = new Date().toISOString().split("T")[0];
    }

    // gestion du bouton Déconnexion
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            sessionStorage.removeItem("currentUser");
            window.location.href = "login.html";
        });
    }
});