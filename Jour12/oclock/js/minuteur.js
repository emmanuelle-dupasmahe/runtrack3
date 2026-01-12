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
                <button onclick="demarrerMinuteur()" class="bg-green-900 hover:bg-green-800 text-white px-8 py-3 rounded-full font-bold shadow-lg transition transform active:scale-95">Démarrer</button>
                <button onclick="arreterMinuteur()" class="bg-red-900 hover:bg-red-800 text-white px-8 py-3 rounded-full font-bold shadow-lg transition transform active:scale-95">Stopper</button>
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
   
    const inputVal = parseInt(document.getElementById('timer-input').value);
    if (inputVal > 0 && tempsRestant === 0) {
        tempsRestant = inputVal;
    }

    if (tempsRestant <= 0) return; // Ne rien faire si 0

    // on évite de lancer plusieurs intervalles en même temps
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
    
    
    const affichage = String(minutes).padStart(2, '0') + ":" + String(secs).padStart(2, '0');
    
    const element = document.getElementById("affichageMinuteur");
    if (element) element.textContent = affichage;
}
function triggerBirdAlert(message) {
    const bird = document.getElementById('coucou-bird');
    const spring = document.getElementById('bird-spring');
    const doorL = document.getElementById('door-left');
    const doorR = document.getElementById('door-right');
    const sound = document.getElementById('coucou-sound');
    
    // Ouverture des portes
    doorL.classList.add('door-left-open');
    doorR.classList.add('door-right-open');

    setTimeout(() => {
        bird.src = "assets/images/woodstock_vol.png";
        bird.classList.add('bird-out'); 
        spring.classList.add('spring-out'); 

        if (sound) {
            // SECURITÉ : On ne clone plus ! On réutilise l'objet existant.
            sound.pause();
            sound.currentTime = 0; 

            let repetitions = 0;
            let intervalSon;

            const playCoucou = () => {
                if (repetitions < 2) {
                    // Au lieu de cloner, on remet juste au début
                    sound.currentTime = 0;
                    
                    bird.classList.add('shake-active');

                    sound.play().catch(e => console.log("L'iPhone bloque le son sans interaction."));
                    
                    repetitions++;
                    
                    setTimeout(() => {
                        bird.classList.remove('shake-active');
                    }, 800);
                } else {
                    clearInterval(intervalSon);
                }
            };

            // On lance le cri après un petit délai
            setTimeout(() => {
                playCoucou();
                intervalSon = setInterval(playCoucou, 1200);
            }, 1500);
        }
    }, 400);

    // Alerte visuelle
    const alertDiv = document.createElement('div');
    alertDiv.className = "absolute top-[52%] left-1/2 -translate-x-1/2 bg-white text-green-900 px-8 py-4 rounded-full shadow-2xl font-bold border-4 border-green-900 animate-bounce z-50 text-xl whitespace-nowrap shadow-[0_0_20px_rgba(255,255,255,0.5)]";
    alertDiv.innerText = message;
    
    const container = document.querySelector('.relative'); 
    if (container) container.appendChild(alertDiv);

    // Nettoyage après 6 secondes
    setTimeout(() => {
        bird.classList.remove('bird-out');
        spring.classList.remove('spring-out'); 
        
        setTimeout(() => {
            bird.src = "assets/images/woodstock_static.png";
            doorL.classList.remove('door-left-open');
            doorR.classList.remove('door-right-open');
        }, 1500);

        alertDiv.remove();
    }, 6000);
}