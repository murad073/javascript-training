'use strict';

let currentPlayer = 0; // index based 
let currentValues = [0, 0, 0];
let totalScores = [0, 0, 0];
const WIN_SCORE = 20;
// const rollDiceButton = document.querySelector(".btn--roll");
// const diceImage = document.querySelector(".dice");
// const holdButton = document.querySelector(".btn--hold");

// rollDiceButton?.addEventListener('click', () => {
//     // get a random number between 1-6
//     let num = Math.floor(Math.random() * 6) + 1;

//     // update the image element with the image 
//     let attr = diceImage.attributes.getNamedItem("src");
//     attr.value = `dice-${num}.png`;
//     diceImage.classList.remove("hidden");

//     if (num === 1) {
//         currentValues[currentPlayer] = 0; 
//         document.querySelector("#current--" + currentPlayer).textContent = currentValues[currentPlayer];
//         switchToNextPlayer();
//     } else {
//         currentValues[currentPlayer] += num;
//         document.querySelector("#current--" + currentPlayer).textContent = currentValues[currentPlayer];
//     }
// });

// holdButton?.addEventListener("click", () => {
//     totalScores[currentPlayer] += currentValues[currentPlayer];
//     document.querySelector("#score--" + currentPlayer).textContent = totalScores[currentPlayer];
//     currentValues[currentPlayer] = 0;
//     document.getElementById(`current--${currentPlayer}`).textContent = currentValues[currentPlayer];

//     if (totalScores[currentPlayer] >= WIN_SCORE) {
//         document.querySelector(`#name--${currentPlayer}`).textContent = `PLAYER ${currentPlayer+1} Win`;
//         document.querySelector(".player--" + currentPlayer).classList.add("player--winner");
//         rollDiceButton.classList.add("hidden");
//         holdButton.classList.add("hidden");
//         diceImage.classList.add("hidden");
//     } else {
//         switchToNextPlayer();
//     }
// });

document.querySelector(".btn--new").addEventListener("click", initialCleanup);

var switchToNextPlayer = () => {
    let nextIndex = currentPlayer + 1;
    if (nextIndex >= totalScores.length) nextIndex = 0;
    document.querySelector(".player--" + currentPlayer).classList.remove("player--active");
    document.querySelector(".player--" + nextIndex).classList.add("player--active");
    diceImage.classList.add("hidden");
    currentPlayer = nextIndex;
};

function initialDomSetup() {
    $("main").append(`
    <section class="player player--0 player--active">
        <h2 class="name" id="name--0">Player 1</h2>
        <p class="score" id="score--0">43</p>
        <img src="dice-5.png" alt="Playing dice" class="dice dice--0" />
        <div class="current">
          <p class="current-label">Current</p>
          <p class="current-score" id="current--0">0</p>
        </div>
        <div>
          <button class="btn btn--roll btn--roll--0">🎲 Roll dice</button>
          <button class="btn btn--hold btn-hold--0">📥 Hold</button>
        </div>
      </section>
    `);
}

// initial cleanup 
function initialCleanup() {
    currentPlayer = 0;
    for(let i=0; i<totalScores.length; i++) {
        totalScores[i] = 0;
        currentValues[i] = 0;
        document.querySelector("#score--" + i).textContent = totalScores[i];
        document.querySelector(`#current--${i}`).textContent = currentValues[i];
        document.querySelector(".player--" + i).classList.remove("player--active");
        document.querySelector(".player--" + i).classList.remove("player--winner");

        document.querySelector(".btn--roll--" + i).add("hidden");
        document.querySelector(".dice--" + i).add("hidden");
        document.querySelector(".btn--hold--" + i).add("hidden");
    }

    document.querySelector(".btn--hold--" + currentPlayer).remove("hidden");
    document.querySelector(".btn--roll--" + currentPlayer).add("hidden");
    document.querySelector(".player--" + currentPlayer).classList.add("player--active");
}

initialDomSetup();
initialCleanup();
