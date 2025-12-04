function jourtravaille(date) {
    const joursFeries2026 = [
        "2026-01-01", 
        "2026-04-06", 
        "2026-05-01", 
        "2026-05-08", 
        "2026-05-14", 
        "2026-05-25", 
        "2026-07-14", 
        "2026-08-15", 
        "2026-11-01", 
        "2026-11-11", 
        "2026-12-25"  
    ];

    const jour = date.getDate();
    const mois = date.getMonth() + 1; //janvier commence à 0
    const annee = date.getFullYear();

    
    const formatAAAAMMJJ = `${annee}-${String(mois).padStart(2, '0')}-${String(jour).padStart(2, '0')}`;
    const dateAffichee = `${jour} ${mois} ${annee}`;

    
    if (joursFeries2026.includes(formatAAAAMMJJ)) {
        console.log(`Le ${dateAffichee} est un jour férié.`);
        return; 
    }

    const jourSemaine = date.getDay();
    if (jourSemaine === 6 || jourSemaine === 0) { // 6 = samedi, 0 = dimanche
        console.log(`Non,le ${dateAffichee} est un jour de week-end.`);
        return; 
    }

    console.log(`Oui, ${dateAffichee} est un jour travaillé.`);
}

jourtravaille(new Date("2026-05-01")); 


jourtravaille(new Date("2026-01-17"));


jourtravaille(new Date("2026-01-12"));