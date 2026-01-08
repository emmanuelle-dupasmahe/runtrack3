let alarmes = [];
let alarmInterval = null;

function renderAlarm() {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = `
        <div class="flex flex-col items-center gap-4 w-full px-4">
            <h2 class="text-2xl text-amber-200 font-serif uppercase tracking-widest">Réveil</h2>
            
            <div class="bg-black/30 p-4 rounded-xl border-2 border-amber-900 w-full max-w-sm">
                <div class="flex flex-col gap-3">
                    <input type="time" id="alarm-time" class="bg-amber-100 text-amber-900 p-2 rounded font-bold text-center text-xl">
                    <input type="text" id="alarm-text" placeholder="Message de l'alerte..." class="bg-amber-100 text-amber-900 p-2 rounded focus:outline-none">
                    <button onclick="ajouterAlarme()" class="bg-amber-700 hover:bg-amber-600 text-white font-bold py-2 rounded-lg transition">Ajouter l'alarme</button>
                </div>
            </div>

            <div class="w-full max-w-sm mt-4 overflow-y-auto max-h-[180px] custom-scrollbar">
                <ul id="listeAlarmes" class="flex flex-col gap-2">
                    </ul>
            </div>
        </div>
    `;
    
    // on lance le calcul du temps restant toutes les secondes
    if (alarmInterval) clearInterval(alarmInterval);
    alarmInterval = setInterval(majTempsRestant, 1000);
    afficherAlarmes();
}

function ajouterAlarme() {
    const timeInput = document.getElementById('alarm-time').value;
    const textInput = document.getElementById('alarm-text').value;

    if (!timeInput) return;

    const nouvelleAlarme = {
        id: Date.now(),
        heure: timeInput,
        message: textInput || "Debout !",
        sonnee: false
    };

    alarmes.push(nouvelleAlarme);
    afficherAlarmes();
}

function majTempsRestant() {
    const now = new Date();
    const heureActuelle = now.getHours().toString().padStart(2, '0') + ":" + now.getMinutes().toString().padStart(2, '0');

    alarmes.forEach(alarme => {
        // vérification si c'est l'heure de sonner
        if (alarme.heure === heureActuelle && !alarme.sonnee) {
            alarme.sonnee = true;
            triggerBirdAlert(alarme.message);
        }
    });

    afficherAlarmes(); // Pour mettre à jour l'affichage "dans x temps"
}

function calculerCountdown(heureCible) {
    const now = new Date();
    const [h, m] = heureCible.split(':');
    let cible = new Date();
    cible.setHours(h, m, 0);

    // Si l'heure est déjà passée aujourd'hui, on considère que c'est pour demain
    if (cible < now) {
        return "passée";
    }

    const diffMs = cible - now;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHeures = Math.floor(diffMins / 60);
    const minsRestantes = diffMins % 60;

    if (diffHeures > 0) {
        return `dans ${diffHeures}h ${minsRestantes}min`;
    }
    return `dans ${minsRestantes} min`;
}

function afficherAlarmes() {
    const liste = document.getElementById('listeAlarmes');
    if (!liste) return;

    liste.innerHTML = alarmes.map(alarme => {
        const statut = calculerCountdown(alarme.heure);
        const estPassee = statut === "passée";
        
        return `
            <li class="flex justify-between items-center p-3 rounded bg-amber-900/40 border-l-4 ${estPassee ? 'border-gray-500 opacity-50' : 'border-green-600'}">
                <div class="flex flex-col">
                    <span class="font-bold text-amber-100 text-lg">${alarme.heure}</span>
                    <span class="text-xs text-amber-200/70 italic">${alarme.message}</span>
                </div>
                <span class="text-xs font-bold ${estPassee ? 'text-gray-400' : 'text-green-400'}">${statut}</span>
                <button onclick="supprimerAlarme(${alarme.id})" class="text-amber-100 hover:text-red-500 ml-2">✕</button>
            </li>
        `;
    }).join('');
}

function supprimerAlarme(id) {
    alarmes = alarmes.filter(a => a.id !== id);
    afficherAlarmes();
}