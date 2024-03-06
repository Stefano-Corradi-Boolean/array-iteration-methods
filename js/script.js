
const colori = ['giallo', 'verde', 'rosso', 'blu'];

const team = [
  {
    name:'Wayne',
    lastname: 'Barnett',
    role: 'Founder & CEO',
    img: 'wayne-barnett-founder-ceo.jpg'
  },
  {
    name:'Angela',
    lastname: 'Caroll',
    role: 'Chief Editor',
    img: 'angela-caroll-chief-editor.jpg'
  },
  {
    name:'Walter',
    lastname: 'Gordon',
    role: 'Office Manager',
    img: 'walter-gordon-office-manager.jpg'
  },
  {
    name:'Angela',
    lastname: 'Lopez',
    role: 'Social Media Manager',
    img: 'angela-lopez-social-media-manager.jpg'
  },
  {
    name:'Scott',
    lastname: 'Estrada',
    role: 'Developer',
    img: 'scott-estrada-developer.jpg'
  },
  {
    name:'Ugo',
    lastname: 'De Ughi',
    role: 'Developer',
    img: 'scott-estrada-developer.jpg'
  },
  {
    name:'Barbara',
    lastname: 'Ramos',
    role: 'Graphic Designer',
    img: 'barbara-ramos-graphic-designer.jpg'
  }

]

// forEach() -> non restituisce nulla
// mioArray.forEach((elementoCiclato, indiceDellelemento, tuttolArray)=>{})
colori.forEach((elemento, indice, mioArray)=>{
  console.log(elemento);
  console.log(indice);
  console.log(mioArray);
})


// for(let elemento of colori){
//   console.log(elemento);
// }

// for(let indice in colori){
//   console.log(indice);
// }

// map() -> restituisce un array
// cicla un array e pusha ad ogni cilco il frutto della mia logica in un nuovo array
// ciclo temm con map() per ottenere un nuovo array di oggetti dove ogni oggetto abbia 2 proprietà : nome = nome + cognome e professione = ruolo

// in map() il return è obbligatorio

const newTem = team.map( person => {
  // creo il nuovo oggetto da restituire
  const newPerson = {
    nome: person.name + ' ' + person.lastname,
    professione: person.role
  }

  // restituisco ad ogni cilo l'oggetto creato
  // map() ad ogni cilo fa un push dentro newTeam
  return newPerson
})

console.log(newTem);

//filter() -> restituisce un array
// creo un nuovo array che contenga solo chi ha ruolo "Developer"
// in filter() il return è obbligatorio
// il push avviene solo se vuene retutuito true e vuone pushato nel nuovo array tutto l'elemento cilcato

// sintassi estesa
// const devTeam = team.filter( person => {
//   if(person.role === 'Developer'){
//     return true
//   }
//   return false
// })

// const devTeam = team.filter( person => {
//     return   person.role === 'Developer' 
// })

// sintassi compatta
const devTeam = team.filter( person => person.role === 'Developer');

console.log(devTeam);

const numeri = [324,32,47,5,3,2,1];

// array di numeri dispari
const numeriDispari = numeri.filter( (numero) => {
  // se il numero è pari restituisco false
  if(numero % 2 === 0){
    // il numero non verrà pushato nel nuovo array
    return false
  } else {
    // se invece è dispari è vero che lo devi pushare
    return true
  }
} )

// const numeriAlQudrato = numeri.map(function(numero){
//   return numero * numero
// })

const numeriAlQudrato = numeri.map( (numero) => numero * numero );

console.log(numeriAlQudrato);

console.log(numeriDispari);

//find() restituisce il primo elemento trovato in base a una determinata condizione
// dal team prendo lo sviluppatore che si chiama 'Ugo'
const ugo = team.find( person => person.name === 'Ugo' );
console.log(ugo);

// findIndex() -> restituisce un numero
// voglio sapere a che indice dell'array è Ugo
const indiceDiUgo = team.findIndex( person => person.name === 'Ugo' );
console.log(indiceDiUgo);
console.log(indiceDiUgo);

// some() -> restituisce true o false in base alla condizione passata
// voglio lapere se c'è Ugo nel tema
const ugoEsiste = team.some( person => person.name === 'Ugo' );
console.log(ugoEsiste);

const altriNumeri = [1,2,3, 4, 5];


// reduce() -> restuiisce il frutto della mia logica che collega tutti gli elementi
// ha un parametro n più, il primo, dove si accumula il frutto del return
// in questo caso il totale man mano si incrementa in base alla logica di somma dell'elmento successivo nel ciclo
const totaleAltriNumeri = altriNumeri.reduce( (totale, numero) => {
  console.log('>>>>>> ', totale);
  return totale + numero;
})

// versione compatta
//const totaleAltriNumeri = altriNumeri.reduce( (totale, numero) => totale + numero)

console.log(totaleAltriNumeri);




