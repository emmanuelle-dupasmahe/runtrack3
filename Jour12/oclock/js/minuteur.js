let intervalId;
let tempsRestant = 0;

function renderTimer() {
    // ancien intervalle nettoyé si on change d'onglet
    clearInterval(intervalId);
    
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = `
        <div class="flex flex-col items-center gap-6">
            <h2 class="text-2xl text-amber-200 font-serif uppercase tracking-widest">Minuteur</h2>
            
            <div id="affichageMinuteur" class="text-6xl font-mono text-amber-400 bg-black/40 p-6 rounded-xl border-2 border-amber-900 shadow-inner">
                00:00
            </div>

            <div class="flex items-center gap-6 bg-amber-950/50 p-4 rounded-lg">
                <button onclick="adjustTimer(-10)" class="text-4xl hover:text-amber-400 transition">▼</button>
                
                <input type="number" id="timer-input" 
                    class="w-24 text-center text-3xl bg-transparent border-b-2 border-amber-600 text-amber-100 focus:outline-none" 
                    placeholder="Sec.">
                
                <button onclick="adjustTimer(10)" class="text-4xl hover:text-amber-400 transition">▲</button>
            </div>

            <div class="flex gap-4">
                <button onclick="demarrerMinuteur()" class="bg-green-800 hover:bg-green-700 text-white px-8 py-3 rounded-full font-bold shadow-lg transition transform active:scale-95">Démarrer</button>
                <button onclick="arreterMinuteur()" class="bg-red-800 hover:bg-red-700 text-white px-8 py-3 rounded-full font-bold shadow-lg transition transform active:scale-95">Stopper</button>
            </div>
        </div>
    `;
}

function adjustTimer(amount) {
    const input = document.getElementById('timer-input');
    let value = parseInt(input.value) || 0;
    input.value = Math.max(0, value + amount);
   
    tempsRestant = parseInt(input.value);
    afficherTemps(tempsRestant);
}

function demarrerMinuteur() {
    // Si l'input a une valeur, on l'utilise, sinon on garde le tempsRestant actuel
    const inputVal = parseInt(document.getElementById('timer-input').value);
    if (inputVal > 0 && tempsRestant === 0) {
        tempsRestant = inputVal;
    }

    if (tempsRestant <= 0) return; // Ne rien faire si 0

    // On évite de lancer plusieurs intervalles en même temps
    clearInterval(intervalId);

    intervalId = setInterval(function() {
        tempsRestant--;
        afficherTemps(tempsRestant);
        
        if (tempsRestant <= 0) {
            arreterMinuteur();
            triggerBirdAlert("Temps écoulé !");
        }
    }, 1000);
}

function arreterMinuteur() {
    clearInterval(intervalId);
}

function afficherTemps(secondes) {
    const minutes = Math.floor(secondes / 60);
    const secs = secondes % 60;
    
    // Version simplifiée de ton formatNumber avec padStart
    const affichage = String(minutes).padStart(2, '0') + ":" + String(secs).padStart(2, '0');
    
    const element = document.getElementById("affichageMinuteur");
    if (element) element.textContent = affichage;
}
function triggerBirdAlert(message) {
    const bird = document.getElementById('coucou-bird');
    
    // on change l'oiseau en coq pour simuler le champs du coq
    bird.textContent = "🐓"; 

    // la descente lente
    setTimeout(() => {
        bird.classList.add('bird-out'); 
    }, 40);

    // alerte temps ecoulé
    const alertDiv = document.createElement('div');
    alertDiv.className = "absolute bottom-80% bg-white text-red-700 px-8 py-4 rounded-full shadow-2xl font-bold border-4 border-red-700 animate-bounce z-50 text-xl";
    alertDiv.innerText = message;
    
    
    const container = document.querySelector('.relative'); 
    container.appendChild(alertDiv);

    // après 5 secondes tout est remis en place
    setTimeout(() => {
        bird.classList.remove('bird-out');
        
        // le coq remonte et on remet l'oiseau de départ
        setTimeout(() => {
            bird.textContent = "🐦";
        }, 1500);

        alertDiv.remove();
    }, 5000);
}