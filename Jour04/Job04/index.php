<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Un tableau d'utilisateurs depuis une base de données</title>
    <link rel="stylesheet" href="style.css"> 
</head>
<body>
    <h1>Liste des Utilisateurs</h1>
    
    <button id="update-button">Mettre à jour les utilisateurs</button>
    
    <table id="users-table">
        <thead>
            <tr>
                <th>ID</th>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td colspan="4">Cliquez sur "Mettre à jour" pour charger les données.</td>
            </tr>
        </tbody>
    </table>
    <script src="script.js"></script>
</body>
</html>