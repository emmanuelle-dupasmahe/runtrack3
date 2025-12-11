async function afficherUsers() {
  const reponse = await fetch("./users.json");
  const users = await reponse.json();

  return users;

}
async function filterUsers(){
  const users = await afficherUsers();
  const filter = users.filter((users) => users.age >= 28);
  //const filter = users.filter((users) => users.age >= 28 && users.ville ='Marseille');
  console.log(filter);
  console.log(filter[0]);
  console.log(filter[0].age);

  filter[0].age = 40;
  console.log("user:0", filter[0]);
}

filterUsers();