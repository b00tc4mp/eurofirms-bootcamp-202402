function GuessForm() {
    Form.call(this)

    this.setStyle('display', 'flex')
    this.setStyle('gap', '10px')

    var charLabel = new Label
    charLabel.setFor('char')
    charLabel.setText('Character')
    this.add(charLabel)

    var charInput = new Input
    charInput.setId('char')
    charInput.setMaxLength(1)
    charInput.setStyle('width', '20px')
    this.add(charInput)

    this.charInput = charInput

    var guessButton = new Button
    guessButton.setType('submit')
    guessButton.setText('Guess')
    this.add(guessButton)
}

GuessForm.prototype = Object.create(Form.prototype)
GuessForm.prototype.constructor = GuessForm

GuessForm.prototype.onSubmit = function (callback) {
    this.container.onsubmit = function (event) {
        event.preventDefault()

        const char = this.charInput.getValue()

        this.reset()

        callback(char)
    }.bind(this)
}