'use strict';

// Selecting Elemetns
const player0Element = document.querySelector('#score--0');
const player1Element = document.querySelector('#score--1');
const dice = document.querySelector('.dice'); 

player0Element.textContent = 0;
player1Element.textContent = 0;
dice.classList.add('hidden');
