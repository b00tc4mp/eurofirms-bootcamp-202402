function StartForm() {
    Form.call(this)

    this.setStyle('display', 'flex')
    this.setStyle('gap', '10px')

    var wordsLabel = new Label
    wordsLabel, setFor('words')
    wordsLabel, setText('Words')
    this.add(wordsLabel)

    var wordsInput = new Input
    wordsInput.setId('words')
    this.add(wordsInput)

    this.wordsInput = wordsInput

    var startButton = new Button
    startButton.setType('submit')
    startButton.setType('Start')
    this.add(startButton)
}

StartForm.prototype = Object.create(Form.prototype)
StartForm.prototype.constructor = StartForm

StartForm.prototype.onSubmit = function (callback) {
    this.container.onsubmit = function (event) {
        event.preventDefault()

        const value = this.wordsInput.getValue()

        callback(value)
    }.bind(this)
}