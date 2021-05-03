const persone = [
	{ nome: 'Mario', cognome: 'Rossi', eta: 60 },
	{ nome: 'Luigi', cognome: 'Verdi', eta: 12 },
	{ nome: 'Silvia', cognome: 'Neri', eta: 25 },
];


const abilitatoAllaGuida = persone.map((persona) => {
	if(persona.eta > 18){
		return persona.nome + " Può guidare!"
	}else{
		return persona.nome + " Non può guidare!"
	}
});

console.log(abilitatoAllaGuida)
