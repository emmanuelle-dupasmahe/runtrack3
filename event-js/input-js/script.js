function afficherPrenom() {
    // Récupérer la valeur de l'input
    let prenom = document.getElementById('prenom').value;
    
    console.log(prenom);

    // Afficher dans un paragraphe
    let resultat = document.getElementById('resultat');
    resultat.textContent = 'Bonjour ' + prenom + ' !';

    console.log(resultat);

    // Changer la couleur
    resultat.style.color = '#1085acff';
    resultat.style.fontSize = '1.8em';
}