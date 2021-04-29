$(document).ready(function(){

  const getPieceOfArray = (arr, min, max) => {
    // Dentro la funzione creare un array vuoto
    
    let newArr = [];
    // Facciamo un ciclo for per prelevare i valori di arrItems compresi tra minimo e massimo
    for(let i of arr){
        // Pusharli nell'array vuoto 
      if(i >= min && i<=max) newArr.push(arr[i])
    }
    // Restituire il risultato dell'array
    return newArr;

  }

  // Dichiarare array e due variabili numero
  let arrayLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
  let limiteMin = 2;
  let limiteMax = 7;

  

  // Dichiarare la funzione con parametri: array, n1, n2
  
  console.log(getPieceOfArray(arrayLetter, limiteMin, limiteMax))
    
  })

  
  
   