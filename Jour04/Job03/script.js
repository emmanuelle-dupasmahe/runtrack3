let allPokemon = [];
const TYPE_SELECT_ID = 'type-filter';
const RESULTS_CONTAINER_ID = 'results-container';

async function loadPokemonData() {
    try {
        
        const response = await fetch('pokemon.json');
        
        if (!response.ok) {
            throw new Error(`Erreur HTTP: ${response.status}`);
        }
        
        allPokemon = await response.json();
        
        
        populateTypeDropdown(allPokemon);
        
        console.log("Données Pokémon chargées avec succès.");
    } catch (error) {
        console.error("Erreur lors du chargement des données Pokémon:", error);
        document.getElementById(RESULTS_CONTAINER_ID).innerHTML = 
            '<p style="color: red;">Erreur: Impossible de charger le fichier pokemon.json.</p>';
    }
}


function populateTypeDropdown(pokemonList) {
    const typeSelect = document.getElementById(TYPE_SELECT_ID);
    const allTypes = new Set(); 

    
    typeSelect.innerHTML = '<option value="">-- Tous les types --</option>';

    pokemonList.forEach(pokemon => {
       
        if (pokemon.type && Array.isArray(pokemon.type)) {
            pokemon.type.forEach(type => allTypes.add(type));
        }
    });

    
    allTypes.forEach(type => {
        const option = document.createElement('option');
        option.value = type;
        option.textContent = type;
        typeSelect.appendChild(option);
    });
}

function displayResults(filteredPokemon) {
    const container = document.getElementById(RESULTS_CONTAINER_ID);
    container.innerHTML = ''; 

    if (filteredPokemon.length === 0) {
        container.innerHTML = '<p>Aucun Pokémon ne correspond à vos critères de recherche.</p>';
        return;
    }


    const ul = document.createElement('ul');
    
    filteredPokemon.forEach(pokemon => {
        const li = document.createElement('li');
        const typesText = pokemon.type ? pokemon.type.join(', ') : 'N/A';
        
        
        const pokemonName = pokemon.name && pokemon.name.french ? pokemon.name.french : 'Nom Inconnu';
        
        li.innerHTML = `<strong>ID: ${pokemon.id}</strong> | Nom: ${pokemonName} | Type(s): ${typesText}`;
        ul.appendChild(li);
    });

    container.appendChild(ul);
}

// la foction pour filtrer les Pokémons
function filterPokemon() {
 
    if (allPokemon.length === 0) {
    alert("Les données Pokémon ne sont pas encore chargées. Veuillez réessayer.");
    return;
    }
    const idFilter = document.getElementById('id-filter').value.trim();
    const nameFilter = document.getElementById('name-filter').value.trim().toLowerCase();
    const typeFilter = document.getElementById(TYPE_SELECT_ID).value;

// Détermine si au moins un des critères ID ou Nom est utilisé
    const isIdOrNameFilteringActive = idFilter || nameFilter;

//  le filtrage
    const filteredList = allPokemon.filter(pokemon => {
         
        // on filtre soit par id soit par nom en français
            let idOrNameMatch = false;

            if (!isIdOrNameFilteringActive) {
            idOrNameMatch = true; 
            } else {
           
            const idMatches = idFilter && pokemon.id.toString() === idFilter;
            
            const nameFrench = pokemon.name && pokemon.name.french;

            const nameIsValid = nameFrench && typeof nameFrench === 'string';

            const nameMatches = nameFilter && nameIsValid && nameFrench.toLowerCase().includes(nameFilter);

            if (idMatches || nameMatches) { // idMatches est maintenant définie !
                idOrNameMatch = true;
             }
        }

        // Si le Pokémon ne correspond pas aux critères ID/Nom,  il est exclut.
        if (!idOrNameMatch) {
        return false;
        }


        if (typeFilter && (!pokemon.type || !pokemon.type.includes(typeFilter))) {
        return false;
        }

        return true;
    });


//le résultat
    displayResults(filteredList);
}


document.addEventListener('DOMContentLoaded', () => {
    
    loadPokemonData();
    
    const filterButton = document.getElementById('filter-button');
    filterButton.addEventListener('click', filterPokemon);
});