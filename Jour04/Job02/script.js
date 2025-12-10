
function jsonValueKey(stringJson, key) {
    try {
        const obj = JSON.parse(stringJson);
        return obj[key];

    } catch (e) {
        console.error("Erreur de parsing JSON :", e);
        return null; 
    }
}

const jsonString = `{
    "name": "La Plateforme_",
    "address": "8 rue d'hozier",
    "city": "Marseille",
    "nb_staff": "11",
    "creation": "2019"
}`;


const city = jsonValueKey(jsonString, "city");
console.log("Ville (city) :", city); 
