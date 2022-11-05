// Il procedimento sarà creare degli array contenenti i numeri random e il numero utente.
// Creo 4 function: una per i numeri random; due per nascondere e mettere gli elementi in pagina e una per pushare gli array. 
// AGGIUNGO I TIME OUT PER TOGLIERE I NUMERI, METTERE L'INPUT E IL TASTO CHECK.
// AL CLICK DEL TASTO CHECK ATTIVERÒ UN CICLO DOVE CONTROLLERÒ SE 1 UN ELEMENTO DEI NUMERI DATI DALL'UTENTE 
// È PRESENTE NELL'ARRAY DEI NUMBERI RANDOM.
// AGGIUNGO QUINDI UNO STATEMENT IN CUI SE È VERO CHE UN ELEMENTO È PRESENTE NELL'ARRAY DARÒ 1 PUNTO ALLA VARIABILE PUNTEGGIO.
// Se la variabile punteggio è grande quanto la lunghezza dei numeri random l'utente ha vinto.


let arrNumber = [] // ARRAY PER I NUMERI RANDOM 
let arrUserNumber =[] // ARRAY PER IL NUMERO DELL'UTENTE
function getRandomInteger(min,max) { // QUESTA FUNCTION GENERA IL NUMBERO RANDOM 
	return Math.floor(Math.random() * (max - min + 1) ) + min;
}
function hideElement(element){ // FUNCTION CHE AGGIUNGE LA CLASSE DISPLAY NONE
    return element.classList.add("hidden")
}
function showElement(element){ // FUNCTION CHE AGGIUNGE IL DISPLAY NONE
    return element.classList.add("show")
}
function pushArray(arr,eleItems){ // Function che pusha un elemento in un array. Ho fatto un funciton perchè mi serve per l'addEvent listener
   let eleItems
   arr = []
   arr.push(eleItems)
}
function checkArray(arr1,elementoCheck){
    let elementoCheck
    let arr1
    for(let i = 0; i< arr1.length; i++){
        if (elementoCheck == arr1[i]) {
            return true
        }else{
            return false
        }
    }
}
for(let i = 1; i <= 5; i++){
     randomNumber = getRandomInteger(1,50)
      arrNumber.push(randomNumber)
}
const checkBtn = document.querySelector(".check")
let eleShowNumber = document.querySelector(".numbers")
const tellmeNumber = document.querySelector(".tellmeNumber")
eleShowNumber.innerHTML += arrNumber

setTimeout(() => hideElement(eleShowNumber),10000)
setTimeout(() => alert("Dimmi numeri che hai appena visto"), 10000)
setTimeout(() => showElement(tellmeNumber),10000)
setTimeout(() => showElement(checkBtn),10000)
checkBtn.addEventListener("click", pushArray(arrUserNumber,tellmeNumber.value)){
   if(checkArray(arrNumber,tellmeNumber.value)){
    this.tellMeNumber
   }
}