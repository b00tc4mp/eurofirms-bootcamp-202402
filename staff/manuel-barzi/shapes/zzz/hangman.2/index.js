var body = new Component
body.container = document.body

var title = new Component('h1')
title.setText('Hangman')
body.add(title)

var startForm = new Form
startForm.setStyle('display', 'flex')
startForm.setStyle('gap', '10px')
startForm.onSubmit(function (event) {
    event.preventDefault()

    sessionStorage.secret = wordsInput.getValue()

    body.remove(startForm)
})

var wordsLabel = new Label
wordsLabel.setFor('words')
wordsLabel.setText('Words')
startForm.add(wordsLabel)

var wordsInput = new Input
wordsInput.setId('words')
startForm.add(wordsInput)

var startButton = new Button
startButton.setType('submit')
startButton.setText('Start')
startForm.add(startButton)

body.add(startForm)
