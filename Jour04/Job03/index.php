<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Un formulaire qui filtre les données d'un fichier Pokemon.json</title>
    <link rel="stylesheet" href="style.css"> 
</head>
<body>
    <h1>Filtrer les Pokémon</h1>
    
    <form id="filter-form">
        <div>
            <label for="id-filter">ID :</label>
            <input type="text" id="id-filter" name="id" placeholder="Ex: 25">
        </div>
        
        <div>
            <label for="name-filter">Nom :</label>
            <input type="text" id="name-filter" name="name" placeholder="Ex: Pikachu">
        </div>
        
        <div>
            <label for="type-filter">Type :</label>
            <select id="type-filter" name="type">
                <option value="">Tous les types</option>
            </select>
        </div>

        <input type="button" id="filter-button" value="Filtrer">
    </form>
    <hr>
    <h2>Résultats</h2>
    <div id="results-container">
        <p>Chargez les données et cliquez sur "Filtrer" pour voir les résultats.</p>
    </div>
    <script src="script.js"></script>
</body>
</html>