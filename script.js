'use strict';

// Selecting Elemetns
const player0Element = document.querySelector('#score--0');
const player1Element = document.querySelector('#score--1');
const dice = document.querySelector('.dice');
const rollDiceBtn = document.querySelector('.btn--roll');
const playerOneCurrentScore = document.querySelector('#current--0');

// Cleared defult data of the score and dice
player0Element.textContent = 0;
player1Element.textContent = 0;
dice.classList.add('hidden');

// Variable to hold players score
let playerScore = 0;

// add logic to roll th dice
rollDiceBtn.addEventListener('click', function(){
    // Generate rondom number from 1 to 6
    const diceNumber = Math.trunc(Math.random()*6) +1;

    // add dice image according to the generated number
    dice.classList.remove('hidden');
   console.log( dice.src = `dice-${diceNumber}.png`);

//    add score to the player
    if(diceNumber !== 1)
    {
        playerScore += diceNumber;
        console.log(playerScore)
        playerOneCurrentScore.textContent = playerScore;
    }


});
