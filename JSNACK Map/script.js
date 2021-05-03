const arrNames = ["pippo", "Pluto", "PAPERINO", "poLDO"];

for(let name of arrNames){
  name = name.charAt(0).toUpperCase() + name.substr(1).toLowerCase();
  console.log(name);
}