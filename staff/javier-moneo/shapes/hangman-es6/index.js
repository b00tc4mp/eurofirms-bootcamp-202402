const body = new Component();
body.container = document.body;

const title = new Component('h1');
title.setText('Hangman');
body.add(title);

const startForm = new StartForm();
let charBoxes;
let hangman;

startForm.onSubmit((words) => {
  sessionStorage.secret = words;

  body.remove(startForm);

  charBoxes = new CharBoxes(words);

  hangman = new Hangman(150, 200);
  body.add(hangman);

  body.add(charBoxes);

  body.add(guessForm);

  startForm.reset();
});

body.add(startForm);

const guessForm = new GuessForm();

let failsCount = 0;

let assertionsCount = 0;

let charsUsed = [];

guessForm.onSubmit((char) => {
  if (!charsUsed.includes(char)) {
    charsUsed.push(char);

    var secret = sessionStorage.secret;

    // for (var i = 0; i < secret.length; i++) {
    for (const i in secret) {
      const charToCompare = secret[i];
      if (char === charToCompare) {
        charBoxes.showChar(i);
        assertionsCount++;
      }
    }

    if (assertionsCount === secret.length) {
      setTimeout(() => {
        alert('You win!');

        body.remove(guessForm);
        body.remove(hangman);
        body.remove(charBoxes);
        body.add(startForm);
        charsUsed = [];
        failsCount = 0;
        assertionsCount = 0;
      }, 1000);
    }

    if (!secret.includes(char)) {
      failsCount++;

      if (failsCount > 6) {
        alert('game over. The solution was ' + sessionStorage.secret);
        body.remove(guessForm);
        body.remove(hangman);
        body.remove(charBoxes);
        body.add(startForm);
        charsUsed = [];
        failsCount = 0;
        assertionsCount = 0;
      } else {
        hangman.setFails(failsCount);
        console.log('fallo');
      }
    }
    guessForm.reset();
  } else alert('char was already used');
});
