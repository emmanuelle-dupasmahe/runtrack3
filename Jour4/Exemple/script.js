async function afficherUsers() {
  const reponse = await fetch("./users.json");
  const films = await reponse.json();
  console.log(films);
}

afficherUsers();