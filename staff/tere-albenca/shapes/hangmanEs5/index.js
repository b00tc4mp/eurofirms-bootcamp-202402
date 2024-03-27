var body = new Component();
body.container = document.body;

var title = new Component("h1");
title.setText("Hangman");
body.add(title);

var startForm = new StartForm();

startForm.onSubmit(function (words) {
  sessionStorage.secret = words;

  body.remove(startForm);

  var charBoxes = new CharBoxes(words);

  body.add(charBoxes);

  var guessForm = new GuessForm();

  var charsUsed = [];
  var assertionsCount = 0;
  var failsCount = 0;

  guessForm.onSubmit(function (char) {
    if (charsUsed.includes(char)) {
      alert("Character was already used. Try with another one.");

      return;
    }

    charsUsed.push(char);

    var charFound = false;

    for (var i = 0; i < sessionStorage.secret.length; i++) {
      var currentChar = sessionStorage.secret[i];

      if (currentChar === char) {
        charFound = true;

        charBoxes.showChar(i);

        assertionsCount++;
      }
    }

    if (charFound) {
      if (assertionsCount === sessionStorage.secret.length) {
        setTimeout(function () {
          alert("You win!");

          body.remove(charBoxes);
          body.remove(guessForm);
          body.remove(hangman);

          body.add(startForm);
        }, 100);
      }

      return;
    }

    failsCount++;

    hangman.setFails(failsCount);

    if (failsCount === 6) {
      setTimeout(function () {
        alert("Game Over.");

        body.remove(charBoxes);
        body.remove(guessForm);
        body.remove(hangman);

        body.add(startForm);
      }, 100);
    }
  });

  body.add(guessForm);

  var hangman = new Hangman(150, 200);
  hangman.setLocation(100, 300);

  body.add(hangman);
});

body.add(startForm);
