const compteur = document.getElementById('compteur');
        function addone() {
            let currentValue = compteur.textContent;//récupère du texte
            let numericValue = parseInt(currentValue);//transforme en nombre
            numericValue = numericValue + 1; 
            compteur.textContent = numericValue;
        }
        document.getElementById('button').addEventListener('click', addone);