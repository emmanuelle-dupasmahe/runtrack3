// récupération de l'utilsateur et protection
const user = JSON.parse(sessionStorage.getItem("currentUser"));

if (!user) {
    window.location.href = "login.html";
}

// vérification des rôles
function isAdmin(user) {
    return user && user.role === "admin";
}

function isModerator(user) {
    return user && (user.role === "moderator" || user.role === "admin");
}

// gestion du calendrier et des users
function isPastDate(dateString) {
    const date = new Date(dateString);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
}

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

    const requests = JSON.parse(localStorage.getItem("requests")) || [];
    
    requests.push({
        id: Date.now(),
        userId: user.id,
        userNom: `${user.prenom} ${user.nom}`,
        date: date,
        status: "pending"
    });

    localStorage.setItem("requests", JSON.stringify(requests));
    alert("Demande envoyée !");
    
    // Si on est modérateur, on rafraîchit la liste immédiatement
    if (isModerator(user)) renderRequests();
}

// approbation ou refus
function updateRequestStatus(id, newStatus) {
    const requests = JSON.parse(localStorage.getItem("requests")) || [];
    const requestIndex = requests.findIndex(r => r.id === id);
    
    if (requestIndex !== -1) {
        requests[requestIndex].status = newStatus;
        localStorage.setItem("requests", JSON.stringify(requests));
        renderRequests(); // Rafraîchit l'affichage sans recharger toute la page
    }
}

// Affichage des demandes
function renderRequests() {
    const requests = JSON.parse(localStorage.getItem("requests")) || [];
    const tableBody = document.getElementById('table-requests');
    
    if (!tableBody) return;

    //  filtrer les "pending" ou tout afficher
    tableBody.innerHTML = ""; // On vide avant d'afficher

    requests.forEach(request => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${request.userNom}</td>
            <td>${request.date}</td>
            <td>
                <span class="badge ${request.status === 'pending' ? 'bg-warning' : (request.status === 'approved' ? 'bg-success' : 'bg-danger')}">
                    ${request.status}
                </span>
            </td>
            <td>
                ${request.status === 'pending' ? `
                    <button onclick="updateRequestStatus(${request.id}, 'approved')" class="btn btn-sm btn-success">Accepter</button>
                    <button onclick="updateRequestStatus(${request.id}, 'refused')" class="btn btn-sm btn-danger">Refuser</button>
                ` : 'Traitée'}
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    // Affichage du nom
    document.getElementById('user-name').textContent = `${user.prenom} ${user.nom}`;

    // Affichage conditionnel selon le rôle 
    if (isModerator(user)) {
        document.getElementById("mod-section").classList.remove('d-none');
        renderRequests();
    }

    if (isAdmin(user)) {
        // "admin-panel" 
        const adminPanel = document.getElementById("admin-section");
        if(adminPanel) adminPanel.classList.remove('d-none');
    }

    // Sécurité input date
    const datePicker = document.getElementById('date-picker');
    if(datePicker) datePicker.min = new Date().toISOString().split("T")[0];

    // Déconnexion
    document.getElementById('logout-btn').addEventListener('click', () => {
        sessionStorage.removeItem("currentUser");
        window.location.href = "login.html";
    });
});