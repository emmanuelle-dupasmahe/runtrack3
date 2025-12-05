const konamiCode= [
    "ArrowUp", "ArrowUp", 
    "ArrowDown", "ArrowDown", 
    "ArrowLeft", "ArrowRight", 
    "ArrowLeft", "ArrowRight", 
    "b", "a"
];
let konamiIndex = 0;
const timeoutDuree = 2000; 
let konamiTimeout;

document.addEventListener("keydown", (e) => {
    const key = e.key;

    if (key === konamiCode[konamiIndex]) {
        konamiIndex++;
        clearTimeout(konamiTimeout);
        konamiTimeout = setTimeout(() => {
            console.log("Délai dépassé. Séquence réinitialisée.");
            konamiIndex = 0; 
        }, timeoutDuree);

        if (konamiIndex === konamiCode.length) {
            applyLaPlateformeStyle();
            konamiIndex = 0; 
            clearTimeout(konamiTimeout); 
        }

    } else {
       
        konamiIndex = 0;
        clearTimeout(konamiTimeout);
        if (key === konamiCode[0]) {
             konamiIndex = 1; 
             konamiTimeout = setTimeout(() => {
                konamiIndex = 0;
             }, timeoutDuree);
        }
    }
    console.log("Progression Konami :", konamiIndex);
});