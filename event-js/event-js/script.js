// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', function() {
    
    // Sélectionner le bouton
    let bouton = document.getElementById('monBouton');
    
    // Ajouter un écouteur d'événement avec function() qui est une fonction anonyme
    bouton.addEventListener('click', function() {
        let message = document.getElementById('message');
        message.textContent = 'Tu as cliqué !';
        message.style.color = '#0a7d60ff';
        message.style.fontSize = '1.6em';
    });
    
});
