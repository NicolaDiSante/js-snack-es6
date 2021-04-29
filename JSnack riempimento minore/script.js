  
/**
 * Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi casuali all’array che ha meno elementi,
fino a quando ne avrà tanti quanti l’altro.
 */

// Crea due array con numero di elementi diversi

let arrOne = [1,2,3,4,5,6,7,8,9,10];
let arrTwo = [11,12,13];


// Crea un generatore casusale di numeri

const getRandomNumber = (min, max) => Math.floor(Math.random()*(max-min+1)+min);


while(arrTwo.length < arrOne.length){
  arrTwo.push(getRandomNumber(14,25))
}:


console.log(arrTwo)
