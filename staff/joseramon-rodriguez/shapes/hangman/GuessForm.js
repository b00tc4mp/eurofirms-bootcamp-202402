function GuessForm() {
    Form.call(this)

    this.setStyle('display', 'flex')
    this.setStyle('gap', '10px')

    var label = new Label
    label.setFor('guessInput')
    label.setText('Type a letter')
    this.add(label)

    var charInput = new Input
    charInput.setId('guessInput')
    charInput.setStyle('maxWidth', '20px')
    charInput.container.maxLength = '1'
    this.add(charInput)

    this.charInput = charInput

    var button = new Button
    button.setType('submit')
    button.setText('Send')
    this.add(button)
}

GuessForm.prototype = Object.create(Form.prototype)
GuessForm.prototype.constructor = GuessForm

GuessForm.prototype.onSubmit = function (callback) {
    this.container.onsubmit = function (event) {
        event.preventDefault()

        var char = this.charInput.getValue()

        callback(char)
    }.bind(this)
}

