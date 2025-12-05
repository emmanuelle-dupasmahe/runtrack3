function citation() {
  const article = document.getElementById("citation");
  if (article) {
    const contenuCitation = article.textContent;
    console.log(contenuCitation);
  } else {
    console.error("L'élément avec l'ID 'citation' n'a pas été trouvé.");
  }
}
