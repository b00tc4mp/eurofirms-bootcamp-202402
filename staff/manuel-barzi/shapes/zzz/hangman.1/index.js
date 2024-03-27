var body = new Component
body.container = document.body

var title = new Component('h1')
title.setText('Hangman')
body.add(title)

var startForm = new Component('form')
startForm.container.style.display = 'flex'
startForm.container.style.gap = '10px'
startForm.container.onsubmit = function (event) {
    event.preventDefault()

    console.log(wordsInput.container.value)
}

var wordsLabel = new Component('label')
wordsLabel.container.htmlFor = 'words'
wordsLabel.setText('Words')
startForm.add(wordsLabel)

var wordsInput = new Component('input')
wordsInput.container.id = 'words'
startForm.add(wordsInput)

var startButton = new Component('button')
startButton.container.type = 'submit'
startButton.setText('Start')
startForm.add(startButton)

body.add(startForm)
