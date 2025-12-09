<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Jeu de l'arc en ciel</title>
    <link rel="stylesheet" href="style.css"> 
</head>
<body>
    <h1>🌈 Jeu de l'arc en ciel</h1>

    <div class="instructions">
        <strong>Instructions :</strong> Glissez chaque morceau d'arc en ciel afin de reproduire un bel arc en ciel.
    </div>

    <div class="game-container">
        <div class="drop-zones">
            <div class="drop-zone" data-number="1">
                <div class="label">Case</div>
                <div class="number">1</div>
            </div>
            <div class="drop-zone" data-number="2">
                <div class="label">Case</div>
                <div class="number">2</div>
            </div>
            <div class="drop-zone" data-number="3">
                <div class="label">Case</div>
                <div class="number">3</div>
            </div>
            <div class="drop-zone" data-number="4">
                <div class="label">Case</div>
                <div class="number">4</div>
            </div>
        </div>
    </div>

    <div class="draggable-items" id="draggableContainer">
        <div class="draggable" data-number="1">1</div>
        <div class="draggable" data-number="2">2</div>
        <div class="draggable" data-number="3">3</div>
        <div class="draggable" data-number="4">4</div>
    </div>

    <div class="controls">
        <button id="btnVerifier">Vérifier</button>
        <button id="btnReset">Réinitialiser</button>
    </div>

    <div class="result" id="result"></div>

    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
    <script src="https://code.jquery.com/ui/1.13.2/jquery-ui.min.js"></script>
    <script src="script.js"></script>
</body>
</html>