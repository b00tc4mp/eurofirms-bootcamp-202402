var body = new Component();
body.container = document.body;

var title = new Component('h1');
title.setText('Hangman');
body.add(title);

var startForm = new StartForm();
var charBoxes;
var hangman;

startForm.onSubmit(function (words) {
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

var guessForm = new GuessForm();

var failsCount = 0;

var assertionsCount = 0;

var charsUsed = [];

guessForm.onSubmit(function (char) {
  if (!charsUsed.includes(char)) {
    charsUsed.push(char);

    var secret = sessionStorage.secret;

    for (var i = 0; i < secret.length; i++) {
      var charToCompare = secret[i];
      if (char === charToCompare) {
        charBoxes.showChar(i);
        assertionsCount++;
      }
    }

    if (assertionsCount === secret.length) {
      setTimeout(function () {
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
