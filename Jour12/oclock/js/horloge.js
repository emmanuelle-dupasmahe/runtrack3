// Variable pour stocker l'intervalle de l'horloge
let clockInterval;

function renderClock() {
    // On arrête tout intervalle précédent pour éviter les bugs
    clearInterval(clockInterval);

    const mainContent = document.getElementById('main-content');
    
    // On injecte le HTML de l'horloge
    mainContent.innerHTML = `
        <div class="bg-black/30 p-8 rounded-2xl border-4 border-amber-950 shadow-inner">
            <div id="clock-display" class="text-7xl font-mono text-amber-400 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                00:00:00
            </div>
            <p class="text-amber-200 mt-4 uppercase tracking-widest text-sm font-bold">Heure de Paris (UTC+1)</p>
        </div>
    `;

    // Fonction interne pour mettre à jour l'affichage
    function updateTime() {
        const now = new Date();
        const options = { 
            timeZone: 'Europe/Paris', 
            hour: '2-digit', 
            minute: '2-digit', 
            second: '2-digit',
            hour12: false 
        };
        const timeString = new Intl.DateTimeFormat('fr-FR', options).format(now);
        
        const display = document.getElementById('clock-display');
        if (display) {
            display.innerText = timeString;
        }
    }

    // On lance la mise à jour immédiatement et toutes les secondes
    updateTime();
    clockInterval = setInterval(updateTime, 1000);
}