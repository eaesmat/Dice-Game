'use strict';

// Selecting Elemetns
const player0Element = document.querySelector('#score--0');
const player1Element = document.querySelector('#score--1');
const dice = document.querySelector('.dice');
const rollDiceBtn = document.querySelector('.btn--roll');
const playerOneCurrentScore = document.querySelector('#current--0');
const playerTwoCurrentScore = document.querySelector('#current--1');
const playerZero = document.querySelector('.player--0');
const playerOne = document.querySelector('.player--1');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');

// Cleared defult data of the score and dice
player0Element.textContent = 0;
player1Element.textContent = 0;
dice.classList.add('hidden');

const swithcPalyer = function () {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  playerScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  playerZero.classList.toggle('player--active');
  playerOne.classList.toggle('player--active');
};

// Variable to hold players score
let playerScore, activePlayer, score, palying;

const init = function () {
  playerScore = 0;
  activePlayer = 0;
  score = [0, 0];
  palying = true;

  playerOne.classList.remove('player--active');
  player0Element.textContent = 0;
  player1Element.textContent = 0;
  playerOneCurrentScore.textContent = 0;
  playerTwoCurrentScore.textContent = 0;
  document.querySelector('.player--0').classList.remove('player--winner');
  document.querySelector('.player--1').classList.remove('player--winner');


};

init();

// add logic to roll th dice
rollDiceBtn.addEventListener('click', function () {
  if (palying) {
    // Generate rondom number from 1 to 6
    const diceNumber = Math.trunc(Math.random() * 6) + 1;

    // add dice image according to the generated number
    dice.classList.remove('hidden');
    dice.src = `dice-${diceNumber}.png`;

    //    add score to the player
    if (diceNumber !== 1) {
      playerScore += diceNumber;
      document.querySelector(`#current--${activePlayer}`).textContent =
        playerScore;
    } else {
      swithcPalyer();
    }

    if (score[activePlayer] + playerScore >= 20) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document.querySelector(`#score--${activePlayer}`).textContent = score[
        activePlayer
      ] += playerScore;
      palying = false;
    }
  }
});

btnHold.addEventListener('click', function () {
  if (palying) {
    document.querySelector(`#score--${activePlayer}`).textContent = score[
      activePlayer
    ] += playerScore;

    if (score[activePlayer] >= 20) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      palying = false;
    } else {
      swithcPalyer();
    }
  }
});

btnNew.addEventListener('click', init);

