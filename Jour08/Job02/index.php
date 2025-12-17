<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tailwind 2</title>
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
</head>
<body>

    <header class="bg-indigo-600 text-white p-4 flex justify-between items-center shadow-md">
    <h1 class="text-2xl font-bold">Mon Site Web</h1>
    <nav>
        <ul class="flex space-x-6">
            <li><a href="index.html" class="hover:text-indigo-200 transition">Accueil</a></li>
            <li><a href="index.html" class="hover:text-indigo-200 transition">Inscription</a></li>
            <li><a href="index.html" class="hover:text-indigo-200 transition">Connexion</a></li>
            <li><a href="index.html" class="hover:text-indigo-200 transition">Rechercher</a></li>
        </ul>
    </nav>
</header>

    <hr> <section>
        <h2>Création de Compte</h2>
        <form action="#" method="post"> <fieldset>
                <legend>Civilité</legend>
                <label>
                    <input type="radio" name="civility" value="Mme" required>
                    Madame
                </label>
                <label>
                    <input type="radio" name="civility" value="M" required>
                    Monsieur
                </label>
                <label>
                    <input type="radio" name="civility" value="Autre" required>
                    Autre
                </label>
            </fieldset>
            <br>

            <div>
                <label for="firstName">Prénom :</label>
                <input type="text" id="firstName" name="firstName" required>
            </div>
            <br>
            
            <div>
                <label for="lastName">Nom :</label>
                <input type="text" id="lastName" name="lastName" required>
            </div>
            <br>

            <div>
                <label for="address">Adresse :</label>
                <input type="text" id="address" name="address" required>
            </div>
            <br>

            <div>
                <label for="email">Adresse Email :</label>
                <input type="email" id="email" name="email" required>
            </div>
            <br>

            <div>
                <label for="password">Mot de passe :</label>
                <input type="password" id="password" name="password" required>
            </div>
            <br>

            <div>
                <label for="confirmPassword">Confirmer le mot de passe :</label>
                <input type="password" id="confirmPassword" name="confirmPassword" required>
            </div>
            <br>

            <fieldset>
                <legend>Vos passions</legend>
                <label>
                    <input type="checkbox" name="passions" value="informatique">
                    Informatique
                </label>
                <label>
                    <input type="checkbox" name="passions" value="voyages">
                    Voyages
                </label>
                <label>
                    <input type="checkbox" name="passions" value="sport">
                    Sport
                </label>
                <label>
                    <input type="checkbox" name="passions" value="lecture">
                    Lecture
                </label>
            </fieldset>
            <br>

            <div>
                <button type="submit">Créer mon compte</button>
            </div>

        </form>
    </section>

    <hr> <footer>
        <nav>
            <ul>
                <li><a href="index.html">Accueil</a></li>
                <li><a href="index.html">Inscription</a></li>
                <li><a href="index.html">Connexion</a></li>
                <li><a href="index.html">Rechercher</a></li>
            </ul>
        </nav>
        <p>&copy; 2025. Tous droits réservés.</p>
    </footer>

</body>
</html>