<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Un formulaire qui filtre les données du fichier Pokemon.json</title>
    <link rel="stylesheet" href="style.css"> 
</head>
<body>
    <h1>🔎 Filtrer les Pokémon 🔍 </h1>
    
    <form id="filter-form">
        <div>
            <label for="id-filter">ID du Pokémon :</label>
            <input type="text" id="id-filter" name="id" placeholder="Un nombre entre 1 et 151">
        </div>
        
        <div>
            <label for="name-filter">Nom du Pokémon :</label>
            <input type="text" id="name-filter" name="name" placeholder="Un nom (1 lettre suffit) de Pokémon">
        </div>
        
        <div>
            <label for="type-filter">Type du Pokémon :</label>
            <select id="type-filter" name="type">
                <option value="">Tous les types</option>
            </select>
        </div>

        <input type="button" id="filter-button" value="Filtrer">
    </form>

    <h2>Résultats</h2>
    <div id="results-container">
        <p>Cliquez sur Filtrer pour voir les résultats.</p>
    </div>
    <script src="script.js"></script>
</body>
</html>