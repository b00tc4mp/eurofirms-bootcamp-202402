var body = new Component
body.container = document.body

var title = new Component('h1')
title.setText('Hangman')
body.add(title)

var startForm = new StartForm

startForm.onSubmit(function (words) {
    sessionStorage.secret = words

    body.remove(startForm)

    var charBoxes = new CharBoxes
        (words)

    body.add(charBoxes)
})

body.add(startForm)