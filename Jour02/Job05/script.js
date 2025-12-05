function showhide() {
            const container = document.body; 
            const existingArticle = document.querySelector('.message-article');

            if (existingArticle) {
                existingArticle.remove();
                document.getElementById('button').textContent = "Afficher l'Article"; 
            } else {
                const newArticle = document.createElement('article');
                newArticle.classList.add('message-article'); 
                newArticle.textContent = "L'important n'est pas la chute, mais l'atterrissage.";
                container.appendChild(newArticle); 
                document.getElementById('button').textContent = "Masquer l'Article";
            }
        }
        document.getElementById('button').addEventListener('click', showhide);
        document.getElementById('button').textContent = "Afficher l'Article";
        
