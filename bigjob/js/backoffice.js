document.addEventListener('DOMContentLoaded', async () => {
    const user = JSON.parse(sessionStorage.getItem("currentUser"));

    // 1. Sécurité : redirection si pas connecté ou pas autorisé
    if (!user || (user.role !== 'admin' && user.role !== 'moderator')) {
        window.location.href = "calendar.html";
        return;
    }

    // 2. Affichage des infos de base
    const userNameElem = document.getElementById('user-name');
    if (userNameElem) userNameElem.textContent = `${user.prenom} ${user.nom}`;

    // 3. Charger et Afficher les demandes (Modo + Admin)
    const modSection = document.getElementById("mod-section");
    if (modSection) {
        modSection.classList.remove('d-none');
        await displayRequests(); 
    }

    // 4. Charger et Afficher les utilisateurs (Admin uniquement)
    const adminSection = document.getElementById("admin-section");
    if (user.role === 'admin' && adminSection) {
        adminSection.classList.remove('d-none');
        await renderUsers();
    }

    // 5. Déconnexion
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            sessionStorage.removeItem("currentUser");
            window.location.href = "login.html";
        });
    }
});

// gestion des demandes

async function initRequests() {
    // localStorage (les nouvelles demandes)
    let localRequests = JSON.parse(localStorage.getItem("requests")) || [];
    
    // vérification si on a déjà importé le JSON 
    let jsonImported = localStorage.getItem("json_requests_imported");

    if (!jsonImported) {
        try {
            const response = await fetch('requests.json');
            if (response.ok) {
                const jsonRequests = await response.json();
                
                // fusion des 2 tableaux : JSON + nouvelles demandes
                localRequests = [...jsonRequests, ...localRequests];
                
                // sauvegarde du tout 
                localStorage.setItem("requests", JSON.stringify(localRequests));
                localStorage.setItem("json_requests_imported", "true");
                
                console.log("Fusion réussie !");
            }
        } catch (error) {
            console.error("Erreur fusion JSON:", error);
        }
    }
    return localRequests;
}

async function displayRequests() {
    const requests = await initRequests();
    const tableBody = document.getElementById('table-requests');
    if (!tableBody) return;

    tableBody.innerHTML = '';
    
    if (requests.length === 0) {
        tableBody.innerHTML = '<tr><td colspan="4" class="text-center">Aucune demande trouvée.</td></tr>';
        return;
    }

    requests.forEach(req => {
        const row = document.createElement('tr');
        const name = req.userName || req.userNom || "Étudiant";
        
        const statusBadge = req.status === 'approved' ? '<span class="badge bg-success">Approuvé</span>' :
                           req.status === 'rejected' ? '<span class="badge bg-danger">Refusé</span>' :
                           '<span class="badge bg-warning text-dark">En attente</span>';

        row.innerHTML = `
            <td>${name}</td>
            <td>${req.date ? new Date(req.date).toLocaleDateString('fr-FR') : 'Date inconnue'}</td>
            <td>${statusBadge}</td>
            <td>
                ${req.status === 'pending' ? `
                    <button onclick="updateStatus(${req.id}, 'approved')" class="btn btn-sm btn-success">Valider</button>
                    <button onclick="updateStatus(${req.id}, 'rejected')" class="btn btn-sm btn-outline-danger">Refuser</button>
                ` : '<span class="text-muted small">Traité</span>'}
            </td>
        `;
        tableBody.appendChild(row);
    });
}

function updateStatus(requestId, newStatus) {
    let requests = JSON.parse(localStorage.getItem("requests")) || [];
    requests = requests.map(req => req.id === requestId ? { ...req, status: newStatus } : req);
    localStorage.setItem("requests", JSON.stringify(requests));
    displayRequests();
}

// gestion des utilisateurs (admin)

async function renderUsers() {
    const tableUsers = document.getElementById('table-users');
    if (!tableUsers) return;

    try {
        const response = await fetch('users.json');
        const defaultUsers = await response.json();
        const localUsers = JSON.parse(localStorage.getItem("users")) || [];
        
        const allUsers = [
            ...defaultUsers.map(u => ({ ...u, isLocal: false })),
            ...localUsers.map(u => ({ ...u, isLocal: true }))
        ];

        tableUsers.innerHTML = "";
        allUsers.forEach(u => {
            const row = document.createElement('tr');
            let actionBtn = u.isLocal ? 
                (u.role === 'user' ? `<button onclick="promoteToModerator('${u.email}')" class="btn btn-sm btn-outline-warning me-1">Modo</button>` : `<span class="text-muted small me-1">Modo</span>`) +
                `<button onclick="deleteUser('${u.email}')" class="btn btn-sm btn-outline-danger">Suppr</button>` :
                `<span class="badge bg-secondary">Lecture seule</span>`;

            row.innerHTML = `
                <td>${u.nom} ${u.prenom}</td>
                <td>${u.email}</td>
                <td><span class="badge bg-info">${u.role}</span></td>
                <td>${actionBtn}</td>
            `;
            tableUsers.appendChild(row);
        });
    } catch (e) { console.error("Erreur renderUsers:", e); }
}

// Fonctions globales pour les boutons (doivent être en dehors du DOMContentLoaded)
function deleteUser(email) {
    if (confirm("Supprimer cet utilisateur ?")) {
        let users = JSON.parse(localStorage.getItem("users")) || [];
        users = users.filter(u => u.email !== email);
        localStorage.setItem("users", JSON.stringify(users));
        renderUsers();
    }
}

function promoteToModerator(email) {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    const idx = users.findIndex(u => u.email === email);
    if (idx !== -1) {
        users[idx].role = "moderator";
        localStorage.setItem("users", JSON.stringify(users));
        renderUsers();
    }
}