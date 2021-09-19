'use strict';

let hiddenNumber = Math.floor( Math.random() * 20 ) + 1;
let score = 20;

let messageElement = document.querySelector(".message");  
let guessElement = document.querySelector(".guess");
let scoreElement = document.querySelector(".score");
let checkElement = document.querySelector(".check");
let highScoreElement = document.querySelector(".highscore");
let numberElement = document.querySelector(".number");
let againElement = document.querySelector(".again");


let checkEventHandler = function() {
    if (guessElement.value == hiddenNumber) { // Win condition 
        messageElement.textContent = "You win!";
        if (score > highScoreElement.value) {
            highScoreElement.textContent = score;
        }
        numberElement.textContent = hiddenNumber;
    } else {    // Fail condition
        if (score < 1) {
            messageElement.textContent = `You loose. Start over again.`;
        } else {
            scoreElement.textContent = --score;
            if (guessElement.value > hiddenNumber) {
                messageElement.textContent = `Not ${guessElement.value}. Too High. Guess again.`;
            } else {
                messageElement.textContent = `Not ${guessElement.value}. Too Low. Guess again.`;
            }
        }
    }
};

let resetHandler = function() {
    score = 20;
    hiddenNumber = Math.floor( Math.random() * 20 ) + 1;
    messageElement.textContent = "Start guessing...";
    scoreElement.textContent = score; 
    numberElement.textContent = '?';
    guessElement.value = '';
};


checkElement.addEventListener('click', checkEventHandler);
againElement.addEventListener('click', resetHandler);
