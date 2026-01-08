let timerInterval;
let timeLeft = 0; // Temps en secondes

function renderTimer() {
    clearInterval(timerInterval);
    const mainContent = document.getElementById('main-content');
    
    mainContent.innerHTML = `
        <div class="flex flex-col items-center gap-6">
            <h2 class="text-2xl text-amber-200 font-serif uppercase tracking-widest">Minuteur</h2>
            
            <div class="flex items-center gap-4 bg-black/20 p-6 rounded-xl border-2 border-amber-900">
                <button onclick="adjustTimer(-10)" class="text-4xl hover:text-amber-400 transition">▼</button>
                
                <input type="number" id="timer-input" 
                    class="w-32 text-center text-4xl bg-transparent border-b-2 border-amber-600 text-amber-100 focus:outline-none" 
                    placeholder="0" value="${timeLeft}">
                
                <button onclick="adjustTimer(10)" class="text-4xl hover:text-amber-400 transition">▲</button>
            </div>

            <div class="flex gap-4">
                <button onclick="startTimer()" class="bg-green-800 hover:bg-green-700 text-white px-8 py-2 rounded-full font-bold shadow-lg transition">Démarrer</button>
                <button onclick="stopTimer()" class="bg-red-800 hover:bg-red-700 text-white px-8 py-2 rounded-full font-bold shadow-lg transition">Stopper</button>
            </div>
        </div>
    `;
}

function adjustTimer(amount) {
    const input = document.getElementById('timer-input');
    let currentValue = parseInt(input.value) || 0;
    input.value = Math.max(0, currentValue + amount);
}