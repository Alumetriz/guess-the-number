'use strict';
// const eventHandler = function() {
//   console.log(document.querySelector('.number-input').value);
// }

const secretNumber =
  Math.trunc(Math.random() * 20) + 1;

let score = 20;

/*
В этом случае: Math.trunc(Math.random() * 20)
Я буду получать значение между 0 и 19, т.к. все десятичные знаки будут откинуты.

Но так как мне нужно значение между 1 и 20 - то я прибавляю 1:
Math.trunc(Math.random() * 20) + 1
 */
// del

// del


console.log(secretNumber);
document.querySelector('.check')
  .addEventListener('click', function() {
    const guessingNumber =
      Number(document.querySelector('.number-input').value);
    console.log(guessingNumber, typeof guessingNumber);

    // No input
    if (!guessingNumber) {
      document.querySelector('.guess-message')
        .textContent = 'Введите число!';

      // Player won
    } else if (guessingNumber === secretNumber) {
      document.querySelector('.guess-message')
        .textContent = 'Правильно!';
      document.querySelector('.question')
        .textContent = secretNumber;
      document.querySelector('body')
        .style.backgroundColor = 'rgb(9, 250, 21)';
      document.querySelector('.question')
        .style.width = '50rem'


      // Too high
    } else if (guessingNumber > secretNumber) {
      if (score > 1) {
        document.querySelector('.guess-message')
          .textContent = 'Слишком много!';
        score--;
        document.querySelector('.score')
          .textContent = score;
      } else {
        document.querySelector('.guess-message')
          .textContent = 'Game Over!';
        document.querySelector('.score')
          .textContent = 0;
      }

      // Too low
    } else if (guessingNumber < secretNumber) {
      if (score > 1) {
        document.querySelector('.guess-message')
          .textContent = 'Слишком мало!';
        score--;
        document.querySelector('.score')
          .textContent = score;
      } else {
        document.querySelector('.guess-message')
          .textContent = 'Game Over!';
        document.querySelector('.score')
          .textContent = 0;
      }
    }
  });

