function updateUsersTable() {
    const tableBody = document.querySelector('#users-table tbody');
    tableBody.innerHTML = ''; 
    fetch('users.php')
    //une promise (Pending (En attente) Fulfilled (Résolue avec succès) Rejected (Rejetée avec erreur))
        .then(response => {
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json(); //parsing
        })
        .then(users => {
            if (users.length === 0) {
                const row = tableBody.insertRow();
                const cell = row.insertCell();
                cell.colSpan = 4;
                cell.textContent = "Aucun utilisateur trouvé dans la base de données.";
                return;
            }

            users.forEach(user => {
                const row = tableBody.insertRow(); 
                let cellId = row.insertCell();
                cellId.textContent = user.id;

                let cellNom = row.insertCell();
                cellNom.textContent = user.nom;

                let cellPrenom = row.insertCell();
                cellPrenom.textContent = user.prenom;

                let cellEmail = row.insertCell();
                cellEmail.textContent = user.email;
            });
        })
        .catch(error => {
            console.error('Erreur lors du chargement des utilisateurs:', error);
            // affiche une erreur dans le tableau
            const row = tableBody.insertRow();
            const cell = row.insertCell();
            cell.colSpan = 4;
            cell.textContent = "Erreur de connexion aux données.";
        });
}

const updateButton = document.getElementById('update-button');
updateButton.addEventListener('click', updateUsersTable);
