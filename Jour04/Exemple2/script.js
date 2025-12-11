async function afficherUsers() {
  const reponse = await fetch("./users.json");
  const users = await reponse.json();

  return users;

}

const users = afficherUsers();


//console.log(users);

//users.then(result => console.log(result));

users.then(result =>{
  console.log("ok"); 
  console.log(result);
});
