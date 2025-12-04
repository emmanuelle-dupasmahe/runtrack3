function jourtravaille(date) {
    const joursFeries2020 = [
        "2020-01-01", 
        "2020-04-13", 
        "2020-05-01", 
        "2020-05-08", 
        "2020-05-21", 
        "2020-06-01", 
        "2020-07-14", 
        "2020-08-15", 
        "2020-11-01",
        "2020-11-11", 
        "2020-12-25"  
    ];

    const jour = date.getDate();
    const mois = date.getMonth() + 1; //janvier commence à 0
    const annee = date.getFullYear();

    
    const formatAAAAMMJJ = `${annee}-${String(mois).padStart(2, '0')}-${String(jour).padStart(2, '0')}`;
    const dateAffichee = `${jour} ${mois} ${annee}`;

    
    if (joursFeries2020.includes(formatAAAAMMJJ)) {
        console.log(`Le ${dateAffichee} est un jour férié.`);
        return; 
    }

    const jourSemaine = date.getDay();
    if (jourSemaine === 6 || jourSemaine === 0) { // 6 = samedi, 0 = dimanche
        console.log(`Non,le ${dateAffichee} est jour de week-end.`);
        return; 
    }

    console.log(`Oui, ${dateAffichee} est un jour travaillé.`);
}

jourtravaille(new Date("2020-05-01"));


jourtravaille(new Date("2020-10-31"));


jourtravaille(new Date("2020-11-04"));