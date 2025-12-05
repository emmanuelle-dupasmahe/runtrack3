const compteur = document.getElementById('compteur');
        function addone() {
            let currentValue = compteur.textContent;
            let numericValue = parseInt(currentValue);
            numericValue = numericValue + 1; 
            compteur.textContent = numericValue;
        }
        document.getElementById('button').addEventListener('click', addone);