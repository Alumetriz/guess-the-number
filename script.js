'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
/*
В этом случае: Math.trunc(Math.random() * 20)
Я буду получать значение между 0 и 19, т.к. все десятичные знаки будут откинуты.

Но так как мне нужно значение между 1 и 20 - то я прибавляю 1:
Math.trunc(Math.random() * 20) + 1
 */

let score = 20;
let highScore = 0;

const displayMessage = function(selector, message) {
  document.querySelector(selector).textContent = message;
}

document.querySelector('.check')
  .addEventListener('click', function() {
    const guessingNumber =
      Number(document.querySelector('.number-input').value);
    console.log(guessingNumber, typeof guessingNumber);

    // No input
    if (!guessingNumber) {
      displayMessage('.guess-message', 'Введите число!')

      // Player won
    } else if (guessingNumber === secretNumber) {
      document.querySelector('.guess-message')
        .textContent = 'Правильно!';
      displayMessage('.guess-message', 'Правильно!')
      document.querySelector('.question')
        .textContent = secretNumber;
      document.querySelector('body')
        .style.backgroundColor = 'rgb(9, 250, 21)';
      document.querySelector('.question')
        .style.width = '50rem';

      if (score > highScore) {
        highScore = score;
      }
      document.querySelector('.highscore')
        .textContent = highScore;

      // Number from input is wrong
    } else if (guessingNumber !== secretNumber) {
      if (score > 1) {
        displayMessage('.guess-message',
          guessingNumber > secretNumber ? 'Слишком много!' : 'Слишком мало!'
        );
        score--;
        document.querySelector('.score')
          .textContent = score;
      } else {
        displayMessage('.guess-message', 'Game Over!')
        document.querySelector('body')
          .style.backgroundColor = 'rgb(255, 0, 0)'
        document.querySelector('.score')
          .textContent = 0;
      }
    }
  });

document.querySelector('.again')
  .addEventListener('click', function() {
    // new secret number
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    displayMessage('.guess-message', 'Начни угадывать!')
    document.querySelector('.number-input').value = '';
    document.querySelector('body').style.backgroundColor = 'rgb(0, 0, 0)';
    document.querySelector('.score').textContent = score;
    document.querySelector('.question').textContent = '???';
    document.querySelector('.question').style.width = '25rem';
  });