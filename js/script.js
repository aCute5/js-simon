// Creo una variabile che genera 5 numeri random tra 1 e 50.
// Inserisco la variabile nel div.numbers.
// Creo una function dove vengono oscurati i numberi e l'istruzione all'utente di dirmi 5 numeri che ci sono scritti
let arrNumber = []
function getRandomInteger(min,max) {
	return Math.floor(Math.random() * (max - min + 1) ) + min;
}  
for(let i = 1; i <= 5; i++){
     randomNumber = getRandomInteger(1,50)
    arrNumber.push(randomNumber)
}

let eleShowNumber = document.querySelector(".numbers")
eleShowNumber.innerHTML += arrNumber