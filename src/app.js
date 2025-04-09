import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
//arrays//
const pokerPals = ["♦", "♣", "♥", "♠"]
const cardVariables = ["A", "2", "3", "4", "5", "6", "7", "8", "9","J", "Q", "K"]
//funcion general//
function myRandomCard () {
//funcion para generar indices random//
function getRandomNumber (arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};
//mezcla el array del pal y define los colores para la clase//
function mixCards (pokerPals) {
  if (pokerPals === "♥" || pokerPals === "♦") {
    return 'red';
  } 
  if(pokerPals === "♠" ||  pokerPals === "♣") {
    return 'black';
  }
  }
//variables de la logica//
  const randomCardNumber = getRandomNumber(cardVariables);
  const randomPal = getRandomNumber (pokerPals); 
  const randomPalGroup = mixCards(randomPal);

//manipulacion del DOM//
  document.getElementById('card-number1').innerText = randomCardNumber;
  document.getElementById('figures-up').innerText = randomPal;
  document.getElementById('figures-down').innerText = randomPal;
  const palUp = document.querySelector(".pal-up");
  const palDown = document.querySelector(".pal-down");
  palUp.classList.remove('red', 'black');
  palDown.classList.remove('red', 'black');
  palUp.classList.add(randomPalGroup);
  palDown.classList.add(randomPalGroup);
}

window.onload = function() {
  document.getElementById('button-card').addEventListener('click', (e) => {
    myRandomCard();
  });
};
