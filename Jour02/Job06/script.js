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
            console.log("⌚ Délai dépassé. Séquence réinitialisée.");
            konamiIndex = 0; 
        }, timeoutDuree);

        if (konamiIndex === konamiCode.length) {
            applyLaPlateformeStyle();
            konamiIndex = 0; 
            clearTimeout(konamiTimeout); 
        }

    } else {
       
        if (konamiIndex > 0) {
            console.log(`❌ Touche incorrecte (${key}). Séquence réinitialisée à 0.`);
        }
        
        konamiIndex = 0;
        clearTimeout(konamiTimeout);
    }
    console.log("Progression Konami :", konamiIndex);
});
function applyLaPlateformeStyle() {
    if (!document.body.classList.contains("la-plateforme-style")) {
        document.body.classList.add("la-plateforme-style");
        console.log("🎉 Code Konami validé ! Le style a été appliqué.");
    }
}