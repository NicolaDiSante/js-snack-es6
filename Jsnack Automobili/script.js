// Creare un array composto da 10 oggetti che rappresentano un automobile
// Ogni oggetto automobile ha proprietà: MARCA, MODELLO, ALIMENTAZIONE (benzina, diesel, gpl, elettrico, metano)
// Dividere le automobili in 3 array separati
// Primo array solo BENZINA, secondo array solo DIESEL, terzo array il resto
// Stampa separatamente i 3 array

const automobili = [
  {
    marca: "Renault",
    modello: "K67",
    alimentazione: "benzina"
  },
  {
    marca: "Mercedes",
    modello: "AL12",
    alimentazione: "benzina"
  },
  {
    marca: "Ford",
    modello: "QWE7",
    alimentazione: "diesel"
  },
  {
    marca: "Golf",
    modello: "8488D",
    alimentazione: "diesel"
  },
  {
    marca: "Cupra",
    modello: "FHDJ3",
    alimentazione: "elettrico"
  },
  {
    marca: "Lamborghini",
    modello: "Diablo67",
    alimentazione: "gpl"
  },
  {
    marca: "Ferrari",
    modello: "ER334",
    alimentazione: "metano"
  },
  {
    marca: "Audi",
    modello: "K3447",
    alimentazione: "benzina"
  },
  {
    marca: "Opel",
    modello: "WEEE67",
    alimentazione: "diesel"
  },
];


const autoBenzina = automobili.filter((auto) => auto.alimentazione === "benzina");
const autoDiesel = automobili.filter((auto) => auto.alimentazione ==="diesel");
const autoRimanenti = automobili.filter((auto) => auto.alimentazione !== "benzina" && auto.alimentazione !== "diesel");

const automobiliFirst = $('.automobili-first');
const automobiliSecond = $('.automobili-second');
const automobiliThird = $('.automobili-third');

printAuto(autoBenzina, automobiliFirst);
printAuto(autoDiesel, automobiliSecond);
printAuto(autoRimanenti, automobiliThird);


function printAuto(listaAuto, target){


  listaAuto.forEach((auto) => {
    let{marca, modello, alimentazione} = auto;
    let html = `
  
    <li>
      ${marca} ${modello} ${alimentazione}
    </li>
   
  `
    target.append(html)
  
  })
  
}

