let chronoInterval = null;
let tempsEcoule = 0; // en centièmes de seconde pour plus de précision
let tours = [];

function renderChrono() {
    // on arrête l'horloge ou le minuteur si on arrive sur cet onglet
    if (typeof clockInterval !== 'undefined') clearInterval(clockInterval);
    if (typeof intervalId !== 'undefined') clearInterval(intervalId);

    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = `
        <div class="flex flex-col items-center gap-4 w-full">
            <h2 class="text-2xl text-amber-200 font-serif uppercase tracking-widest">Chronomètre</h2>
            
            <div id="affichageChrono" class="text-6xl font-mono text-amber-400 bg-black/40 p-6 rounded-xl border-2 border-amber-900 shadow-inner min-w-[300px]">
                00:00:00
            </div>

            <div class="flex gap-4">
                <button id="btnToggle" onclick="toggleChrono()" class="bg-green-800 hover:bg-green-700 text-white px-6 py-2 rounded-full font-bold shadow-lg transition">Démarrer</button>
                <button onclick="enregistrerTour()" class="bg-amber-700 hover:bg-amber-600 text-white px-6 py-2 rounded-full font-bold shadow-lg transition">Tour</button>
                <button onclick="resetChrono()" class="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-full font-bold shadow-lg transition">Reset</button>
            </div>

            <div class="w-full max-w-[300px] mt-4 max-h-[150px] overflow-y-auto custom-scrollbar">
                <ul id="listeTours" class="flex flex-col gap-2">
                    </ul>
            </div>
        </div>
    `;
    // on réaffiche les tours si on revient sur l'onglet
    afficherTours();
    formaterChrono(tempsEcoule);
}

function toggleChrono() {
    const btn = document.getElementById("btnToggle");
    if (chronoInterval) {
        clearInterval(chronoInterval);
        chronoInterval = null;
        btn.textContent = "Démarrer";
        btn.classList.replace("bg-red-800", "bg-green-800");
    } else {
        btn.textContent = "Arrêter";
        btn.classList.replace("bg-green-800", "bg-red-800");
        chronoInterval = setInterval(() => {
            tempsEcoule += 10; // 10ms
            formaterChrono(tempsEcoule);
        }, 10);
    }
}

function formaterChrono(ms) {
    const minutes = Math.floor(ms / 60000);
    const secondes = Math.floor((ms % 60000) / 1000);
    const centiemes = Math.floor((ms % 1000) / 10);

    const text = `${String(minutes).padStart(2, '0')}:${String(secondes).padStart(2, '0')}:${String(centiemes).padStart(2, '0')}`;
    const el = document.getElementById("affichageChrono");
    if (el) el.textContent = text;
    return text; // pour enregistrer le tour
}

function enregistrerTour() {
    if (tempsEcoule === 0) return;
    const tempsActuel = formaterChrono(tempsEcoule);
    tours.unshift(tempsActuel); // pour ajouter le tour au début de la liste
    afficherTours();
}

function afficherTours() {
    const liste = document.getElementById("listeTours");
    if (!liste) return;
    liste.innerHTML = tours.map((t, i) => `
        <li class="bg-amber-900/40 border-l-4 border-amber-600 p-2 rounded flex justify-between text-amber-100">
            <span>Tour ${tours.length - i}</span>
            <span class="font-mono">${t}</span>
        </li>
    `).join('');
}

function resetChrono() {
    clearInterval(chronoInterval);
    chronoInterval = null;
    tempsEcoule = 0;
    tours = [];
    renderChrono();
}