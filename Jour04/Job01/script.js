
const button = document.getElementById('button');

button.addEventListener('click', function() {
    fetch('expression.txt')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erreur HTTP: ${response.status}`);
            }
            return response.text(); //parsing
        })
        .then(data => {
            const newParagraph = document.createElement('p');
            newParagraph.textContent = data;
            document.body.appendChild(newParagraph);
            button.disabled = true;
            button.textContent = "Expression affichée !";
        })
        .catch(error => {
            console.error('Erreur lors de la récupération du fichier:', error);
            alert("Une erreur est survenue lors de la récupération de l'expression.");
        });
});