// dice left
var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1 - 6

var randomImageSource1 = "images/dice" + randomNumber1 + ".png"; // images/dice1.png - dice6.png

var image1 = document.querySelectorAll("img")[0]; // 2 images in het html document. dat is een array. welke dice je de naam var image1 geeft, doe je
// door de plek in de array te specificeren.
image1.setAttribute("src", randomImageSource1); // zo geef je aan hoe je image1 wil veranderen. Bij setAttribute() heb je altijd 2 parameters, 1 = wat je
// wil veranderen (hier de src) en 2 = waarin je het wil veranderen.
// dice right
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2); // shorter way of writing it down.

// change titel h1 depending on outcome dices
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins! 🚩";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
