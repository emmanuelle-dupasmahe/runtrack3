function estPremier(nombre) {
    if (nombre <= 1) {
        return false;
    }
    for (let i = 2; i * i <= nombre; i++) {
        if (nombre % i === 0) {
            return false;
        }
    }
    return true;
}

function sommenombrespremiers(n1, n2) {
    const n1EstPremier = estPremier(n1);
    const n2EstPremier = estPremier(n2);

    if (n1EstPremier && n2EstPremier) {
        const somme = n1 + n2;
        console.log(`Les deux nombres (${n1} et ${n2}) sont premiers. Leur somme est : ${somme}`);
        return somme;
    } else {
        console.log(`Au moins un des nombres (${n1}, ${n2}) n'est pas premier. Retourne : false`);
        return false;
    }
}
sommenombrespremiers(7, 13); 
sommenombrespremiers(10, 17);
sommenombrespremiers(15, 4);
sommenombrespremiers(17, 17); 