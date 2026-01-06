

document.addEventListener('DOMContentLoaded', async () => {
    const user = JSON.parse(sessionStorage.getItem("currentUser"));

    // Vérification d'accès
    if (!user || user.role === 'user') {
        window.location.href = "calendar.html";
        return;
    }

    // Affichage du nom
    document.getElementById('user-name').textContent = `${user.prenom} ${user.nom}`;

    // affichage des demandes
    document.getElementById("mod-section").classList.remove('d-none');
    renderRequests(); 

    // Afficher les users seulement si admin
    if (user.role === 'admin') {
        document.getElementById("admin-section").classList.remove('d-none');
        renderUsers();
    }

    // Gestion de la déconnexion
    document.getElementById('logout-btn').addEventListener('click', () => {
        sessionStorage.removeItem("currentUser");
        window.location.href = "login.html";
    });
});
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

//fonction pour afficher les utilisateurs pour admin uniquement avec protection json
async function renderUsers() {
    const tableUsers = document.getElementById('table-users');
    if (!tableUsers) return;

    try {
        // Récupérer les utilisateurs du fichier JSON (Lecture seule)
        const response = await fetch('users.json');
        const defaultUsers = await response.json();
        const defaultUsersWithFlag = defaultUsers.map(u => ({ ...u, isLocal: false }));
        
        // Récupérer les utilisateurs du LocalStorage (Modifiables)
        const localUsers = JSON.parse(localStorage.getItem("users")) || [];
        const localUsersWithFlag = localUsers.map(u => ({ ...u, isLocal: true }));
        
        // Fusion
        const allUsers = [...defaultUsersWithFlag, ...localUsersWithFlag];

        tableUsers.innerHTML = "";

        allUsers.forEach(u => {
            const row = document.createElement('tr');
            
            // Logique de bouton : on ne permet la promotion que si isLocal est true
            let actionBtn = "";

            if (u.isLocal) {
            // Bouton promote uniquement si c'est encore un simple utilisateur
            if (u.role === 'user') {
                actionBtn = `<button onclick="promoteToModerator('${u.email}')" class="btn btn-sm btn-outline-warning me-1">Nommer Modo</button>`;
            } else {
            // indicateur visuel s'il est déjà modo
                actionBtn = `<span class="text-muted small me-1">Modérateur</span>`;
            }

            // Bouton SUPPRIMER : pour les comptes locaux (isLocal)
                actionBtn += `<button onclick="deleteUser('${u.email}')" class="btn btn-sm btn-outline-danger">Supprimer</button>`;

            } else if (!u.isLocal) {
            // fichier JSON
                actionBtn = `<span class="badge bg-secondary">Lecture seule (JSON)</span>`;
            }

            row.innerHTML = `
                <td>${u.nom} ${u.prenom}</td>
                <td>${u.email}</td>
                <td><span class="badge bg-info">${u.role}</span></td>
                <td>${actionBtn}</td>
            `;
            tableUsers.appendChild(row);
        });
    } catch (e) {
        console.error("Erreur :", e);
    }
}
// fonction pour supprimer l'utilisateur
function deleteUser(email) {
    if (confirm("Voulez-vous vraiment supprimer cet utilisateur ?")) {
        let users = JSON.parse(localStorage.getItem("users")) || [];
        users = users.filter(u => u.email !== email);
        localStorage.setItem("users", JSON.stringify(users));
        renderUsers(); // Rafraîchir la vue
    }
}

//fonction pour changer le rôle
function promoteToModerator(email) {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    const userIndex = users.findIndex(u => u.email === email);

    if (userIndex !== -1) {
        users[userIndex].role = "moderator";
        localStorage.setItem("users", JSON.stringify(users));
        alert(email + " est maintenant Modérateur.");
        renderUsers(); // Rafraîchir la liste
    }
}
