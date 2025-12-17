<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inscription - Tailwind 4</title>
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
</head>
<body class="bg-gray-50">

    <header class="bg-indigo-600 text-white p-4 flex justify-between items-center shadow-md">
        <h1 class="text-2xl font-bold"> Site Web</h1>
        <nav>
            <ul class="flex space-x-6">
                <li><a href="index.html" class="hover:text-indigo-200 transition">Accueil</a></li>
                <li><a href="index.html" class="hover:text-indigo-200 transition">Inscription</a></li>
                <li><a href="index.html" class="hover:text-indigo-200 transition">Connexion</a></li>
                <li><a href="index.html" class="hover:text-indigo-200 transition">Rechercher</a></li>
            </ul>
        </nav>
    </header>

    <main class="max-w-4xl mx-auto p-6 my-10 bg-white shadow-sm rounded-xl">
        <form action="#" method="post">
            <div class="space-y-12">
                
                <div class="border-b border-indigo-900/10 pb-12">
                    <h2 class="text-base/7 font-semibold text-shadow-lg text-indigo-900">Création de Compte</h2>
                    <p class="mt-1 text-sm/6 text-indigo-600">Bienvenue ! Veuillez remplir ces informations pour rejoindre notre communauté.</p>

                    <div class="mt-10">
                        <fieldset>
                            <legend class="text-sm/6 font-semibold text-shadow-lg text-indigo-900">Civilité</legend>
                            <div class="mt-6 flex items-center gap-x-6">
                                <div class="flex items-center gap-x-3">
                                    <input id="civ-mme" name="civility" type="radio" value="Mme" required class="relative size-4 appearance-none rounded-full border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                    <label for="civ-mme" class="block text-sm/6 font-medium text-indigo-900">Madame</label>
                                </div>
                                <div class="flex items-center gap-x-3">
                                    <input id="civ-m" name="civility" type="radio" value="M" class="relative size-4 appearance-none rounded-full border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                    <label for="civ-m" class="block text-sm/6 font-medium text-indigo-900">Monsieur</label>
                                </div>
                                <div class="flex items-center gap-x-3">
                                    <input id="civ-autre" name="civility" type="radio" value="Autre" class="relative size-4 appearance-none rounded-full border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                    <label for="civ-autre" class="block text-sm/6 font-medium text-indigo-900">Autre</label>
                                </div>
                            </div>
                        </fieldset>
                    </div>
                </div>

                <div class="border-b border--900/10 pb-12">
                    <h2 class="text-base/7 font-semibold text-shadow-lg text-indigo-900">Informations Personnelles</h2>
                    <p class="mt-1 text-sm/6 text-indigo-600">Ces données nous permettent de personnaliser votre expérience.</p>

                    <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div class="sm:col-span-3">
                            <label for="firstName" class="flex items-center gap-x-2 text-sm/6 font-medium text-indigo-900">
                            <img src="assets/images/lock-protect-security-18-svgrepo-com.svg" alt="prénom" class="size-6 opacity-90">    
                            Prénom</label>
                            <div class="mt-2 shadow-lg">
                                <input type="text" name="firstName" id="firstName" required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                            </div>
                        </div>

                        <div class="sm:col-span-3">
                            <label for="lastName" class="flex items-center gap-x-2 text-sm/6 font-medium text-indigo-900">
                              <img src="assets/images/lock-protect-security-18-svgrepo-com.svg" alt="nom" class="size-6 opacity-90">  
                            Nom</label>
                            <div class="mt-2 shadow-lg">
                                <input type="text" name="lastName" id="lastName" required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                            </div>
                        </div>

                        <div class="sm:col-span-4">
                            <label for="email" class="flex items-center gap-x-2 text-sm/6 font-medium text-indigo-900">
                             <img src="assets/images/freeze-message-box-snow-svgrepo-com.svg" alt="email" class="size-6 opacity-90">   
                            Email</label>
                            <div class="mt-2 shadow-lg">
                                <input id="email" name="email" type="email" required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                            </div>
                        </div>


                        <div class="col-span-full">
                            <label for="address" class="flex items-center gap-x-2 text-sm/6 font-medium text-indigo-900">
                                <img src="assets/images/frozen-house-ice-svgrepo-com.svg" alt="adresse" class="size-6 opacity-90">
                            Adresse</label>
                            <div class="mt-2 shadow-lg"> 
                                <input type="text" name="address" id="address" required 
                                class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-indigo-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                            </div>
                        </div>

                        <div class="sm:col-span-3">
                            <label for="password" class="flex items-center gap-x-2 text-sm/6 font-medium text-indigo-900">
                              <img src="assets/images/lock-protect-security-19-svgrepo-com.svg" alt="mot de passe" class="size-6 opacity-90">  
                            Mot de passe</label>
                            <div class="mt-2 shadow-lg">
                                <input type="password" name="password" id="password" required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 sm:text-sm/6">
                            </div>
                        </div>

                        <div class="sm:col-span-3">
                            <label for="confirmPassword" class="flex items-center gap-x-2 text-sm/6 font-medium text-indigo-900">
                              <img src="assets/images/lock-protect-security-19-svgrepo-com.svg" alt="confirmer le mot de passe" class="size-6 opacity-90">  
                            Confirmer le mot de passe</label>
                            <div class="mt-2 shadow-lg">
                                <input type="password" name="confirmPassword" id="confirmPassword" required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:outline-indigo-600 sm:text-sm/6">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="pb-12">
                    <h2 class="text-base/7 font-semibold text-shadow-lg text-indigo-900">Préférences</h2>
                    <div class="mt-10 space-y-10">
                        <fieldset>
                            <legend class="flex items-center gap-x-2 text-sm/6 font-medium text-indigo-900">
                            <img src="assets/images/heart-love-marriage-28-svgrepo-com.svg" alt="passions" class="size-6 opacity-90">  
                            Vos passions</legend>
                            <p class="mt-1 text-sm/6 text-indigo-600">Sélectionnez les sujets qui vous intéressent.</p>
                            <div class="mt-6 grid grid-cols-1 gap-y-4 sm:grid-cols-2">
                                <div class="flex gap-3">
                                    <input id="info" name="passions" value="informatique" type="checkbox" class="size-4 rounded-sm border-indigo-300 text-indigo-600 shadow-lg focus:ring-indigo-600">
                                    <label for="info" class="flex items-center gap-x-2 text-sm/6 font-medium text-indigo-900">
                                    <img src="assets/images/computer-svgrepo-com.svg" alt="informatique" class="size-6 opacity-90">    
                                    Informatique</label>
                                </div>
                                <div class="flex gap-3">
                                    <input id="voyage" name="passions" value="voyages" type="checkbox" class="size-4 rounded-sm border-indigo-300 text-indigo-600 shadow-lg focus:ring-indigo-600">
                                    <label for="voyage" class="flex items-center gap-x-2 text-sm/6 font-medium text-indigo-900">
                                    <img src="assets/images/airplane-svgrepo-com.svg" alt="voyage" class="size-6 opacity-90">   
                                    Voyages</label>
                                </div>
                                <div class="flex gap-3">
                                    <input id="sport" name="passions" value="sport" type="checkbox" class="size-4 rounded-sm border-indigo-300 text-indigo-600 shadow-lg focus:ring-indigo-600">
                                    <label for="sport" class="flex items-center gap-x-2 text-sm/6 font-medium text-indigo-900">
                                    <img src="assets/images/bike-svgrepo-com (1).svg" alt="sport" class="size-6 opacity-90">    
                                    Sport</label>
                                </div>
                                <div class="flex gap-3">
                                    <input id="lecture" name="passions" value="lecture" type="checkbox" class="size-4 rounded-sm border-indigo-300 text-indigo-600 shadow-lg focus:ring-indigo-600">
                                    <label for="lecture" class="flex items-center gap-x-2 text-sm/6 font-medium text-indigo-900">
                                    <img src="assets/images/book-closed-svgrepo-com.svg" alt="lecture" class="size-6 opacity-90">     
                                    Lecture</label>
                                </div>
                            </div>
                        </fieldset>
                    </div>
                </div>
            </div>

            <div class="mt-6 flex items-center justify-end gap-x-6 border-t border-indigo-900/10 pt-6">
                <button type="button" class="text-sm/6 font-semibold text-indigo-900">Annuler</button>
                <button type="submit" class="rounded-md bg-indigo-600 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition">Créer mon compte</button>
            </div>
        </form>
    </main>

    <footer class="bg-indigo-800 text-white p-8 mt-10">
        <div class="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <nav class="mb-4 md:mb-0">
                <ul class="flex flex-wrap justify-center gap-6">
                    <li><a href="index.html" class="hover:text-indigo-400 transition">Accueil</a></li>
                    <li><a href="index.html" class="hover:text-indigo-400 transition">Inscription</a></li>
                    <li><a href="index.html" class="hover:text-indigo-400 transition">Connexion</a></li>
                    <li><a href="index.html" class="hover:text-indigo-400 transition">Rechercher</a></li>
                </ul>
            </nav>
            <p class="text-fuchsia-400 text-sm italic">&copy; 2025. Tous droits réservés.</p>
        </div>
    </footer>

</body>
</html>