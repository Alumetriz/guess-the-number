'use strict';
/*
console.log(document.querySelector('.guess-message').textContent);

document.querySelector('.guess-message').textContent = 'Правильно!';

document.querySelector('.question').textContent = 7;

document.querySelector('.score').textContent = 11;

document.querySelector('.number-input').value
*/

// const eventHandler = function() {
//   console.log(document.querySelector('.number-input').value);
// }
document.querySelector('.check')
  .addEventListener('click', function() {
    const guessingNumber =
      Number(document.querySelector('.number-input').value);
    console.log(guessingNumber, typeof guessingNumber);

    if (!guessingNumber) {
      document.querySelector('.guess-message')
        .textContent = 'Введите какое-то число!';
    }
  });

