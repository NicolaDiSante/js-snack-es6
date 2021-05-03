const animali = [
	{ nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
	{ nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
	{ nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
  { nome: 'anaconda', famiglia: 'serpenti', classe:'rettili'}
]


let mammiferi = animali.filter(function(mammifero){
  return mammifero.classe == "mammiferi";
})

console.log(mammiferi)