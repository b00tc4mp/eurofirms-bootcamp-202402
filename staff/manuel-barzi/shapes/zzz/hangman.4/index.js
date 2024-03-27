var body = new Component
body.container = document.body

var title = new Component('h1')
title.setText('Hangman')
body.add(title)

var startForm = new StartForm

startForm.onSubmit(function (words) {
    sessionStorage.secret = words

    body.remove(startForm)

    var charBoxes = new Component('div')
    charBoxes.setStyle('display', 'flex')
    charBoxes.setStyle('gap', '5px')

    for (var i = 0; i < words.length; i++) {
        var char = words[i]

        var charBox = new Component('div')
        charBox.setStyle('border', '1px solid black')
        charBox.setStyle('font-family', 'courier')
        charBox.setStyle('font-size', '36px')
        charBox.setStyle('padding', '5px')
        charBox.setStyle('background-color', 'black')
        charBox.setStyle('min-width', '20px')
        charBox.setText(char)

        charBoxes.add(charBox)
    }

    body.add(charBoxes)
})

body.add(startForm)
