<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Jeu de l'arc-en-ciel</title>
    <link rel="stylesheet" href="style.css"> 
</head>
<body>
    <h1>🌈 Jeu de l'arc-en-ciel</h1>
    <div class="instructions">
        <strong>Instructions :</strong> Mélangez les morceaux, puis glissez-les dans les cases au dessus pour reconstruire le bel arc-en-ciel.
    </div>

    <h2>Zone de Reconstruction</h2>
    <div class="game-container">
        <div class="drop-zones">
            <div class="drop-zone" data-number="1"></div>
            <div class="drop-zone" data-number="2"></div>
            <div class="drop-zone" data-number="3"></div>
            <div class="drop-zone" data-number="4"></div>
            <div class="drop-zone" data-number="5"></div>
            <div class="drop-zone" data-number="6"></div>
        </div>
    </div>

    <h2>Morceaux à Placer</h2>
    <div class="draggable-items" id="draggableContainer">
        <div class="draggable" data-number="1"><img src="arcenciel/arc1.png" alt="Morceau 1"></div>
        <div class="draggable" data-number="2"><img src="arcenciel/arc2.png" alt="Morceau 2"></div>
        <div class="draggable" data-number="3"><img src="arcenciel/arc3.png" alt="Morceau 3"></div>
        <div class="draggable" data-number="4"><img src="arcenciel/arc4.png" alt="Morceau 4"></div>
        <div class="draggable" data-number="5"><img src="arcenciel/arc5.png" alt="Morceau 5"></div>
        <div class="draggable" data-number="6"><img src="arcenciel/arc6.png" alt="Morceau 6"></div>
    </div>

    <div class="result" id="result"></div>

    <div class="controls">
        <button id="btnShuffle">Mélanger</button>
        <button id="btnVerifier">Vérifier</button>
        <button id="btnReset">Réinitialiser le Jeu</button>
    </div>

   
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
    <script src="https://code.jquery.com/ui/1.13.2/jquery-ui.min.js"></script>
    <script src="script.js"></script>
</body>
</html>