function showhide() {
            const container = document.body; 
            const existingArticle = document.querySelector('.message-article');
            //vérifie si l'élément est ds le DOM
            if (existingArticle) {
                existingArticle.remove();
                document.getElementById('button').textContent = "Afficher l'article"; 
            } else {
                const newArticle = document.createElement('article');
                newArticle.classList.add('message-article'); 
                newArticle.textContent = "L'important n'est pas la chute, mais l'atterrissage.";
                container.appendChild(newArticle); 
                document.getElementById('button').textContent = "Masquer l'article";
            }
        }
        document.getElementById('button').addEventListener('click', showhide);
        document.getElementById('button').textContent = "Afficher l'article";
        
