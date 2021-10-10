'use strict';

let player = 1;
let player1CurrentValue = 0, player2CurrentValue = 0;
const rollDiceButton = document.querySelector(".btn--roll");
const diceImage = document.querySelector(".dice");
const player1CurrentValueElement = document.querySelector("#current--0");
const player2CurrentValueElement = document.querySelector("#current--1");
const player1ScoreElement = document.querySelector("#score--0");
const player2ScoreElement = document.querySelector("#score--1");

rollDiceButton.addEventListener('click', () => {
    // get a random number between 1-6
    let num = Math.floor(Math.random() * 6) + 1;
    // update the image element with the image 
    let attr = diceImage.attributes.getNamedItem("src");
    attr.value = `dice-${num}.png`;
    diceImage.classList.remove("hidden");

    if (player === 1) {
        player1CurrentValue += num;
        player1CurrentValueElement.textContent = player1CurrentValue;
    } else if (player === 2) {
        player2CurrentValue += num;
        player2CurrentValueElement.textContent = player2CurrentValue;
    }
});


// initial cleanup 
player1ScoreElement.textContent = 0;
player2ScoreElement.textContent = 0;
diceImage.classList.add("hidden");

