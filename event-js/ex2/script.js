//fruits existants et leurs couleurs
const fruits = {
    "pomme": "rouge",
    "bannane": "jaune",
    "poire": "vert"
};

//Panier avec des fruits
const panier = ["pomme", "poire"];

// -> Vérifier quels fruits existants sont dans le panier
// EX:
// pomme dans panier? true
// banane dans panier? false


for (fruit in panier) {
    
    //ATTENTION: "fruit" ici est l'index dans l'array
    //Si on veut par exemple "pomme", à l'index 0 de panier,
    //Il faut utiliser panier[fruit]
}

// Si un fruit existant est dans le panier, console log le fruit et sa couleur, sinon
// console log "ce fruit n'est pas dans le panier".

