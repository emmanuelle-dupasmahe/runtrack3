function tri(numbers, order) {
  if (order !== 'asc' && order !== 'desc') {
    console.error("Erreur : Le paramètre 'order' doit être 'asc' ou 'desc'.");
    return numbers;
  }
  const tableauTrie= numbers.sort((a, b) => {
    if (order === 'asc') {
      return a - b;
    } else { 
      return b - a;
    }
  });
  console.log(`Tableau trié en ordre ${order === 'asc' ? 'croissant' : 'décroissant'} :`);
  console.log(tableauTrie);

  return tableauTrie;
}

const monTableau = [4, 1, 8, 5, 2, 9, 3, 7, 6];

tri(monTableau, 'asc');
tri(monTableau, 'desc');
tri (monTableau, 'asce');