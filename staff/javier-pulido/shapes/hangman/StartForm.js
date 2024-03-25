function StartForm() {
    FormData.call(this)

    this.setStyle('display', 'flex')
    this.setStyle('gap', '10px')

    var wordsLabel = new Label
    wordsLabel.setFor('words')
    wordsLabel.setText('Words')
    this.add(wordsLabel)

    var wordInput = new Input
    wordsInput.set('words')
    this.add(wordsInput)

    this.wordsInput = this.wordsInput

    var StartButton = new Button
    startButton.setType('submit')
    startuButton.setText('Start')
    this.add(startButton)

}

StartForm.prototype = Object.create(Form.prototype)
StartForm.prototype.contructor = StartForm

StartForm.prototype.onSubmit = function (callback) {
    this.container.onsubmit = function (event) {
        event.preventDefault()

        const value = this.wordsInput.getValue()

        callback(value)
    }.bind(this)
}