class StartForm extends Form {
    constructor() {
        super()
    

    this.setStyle('display', 'flex')
    this.setStyle('gap', '10px')

    var wordsLabel = new Label
    wordsLabel.setFor('words')
    wordsLabel.setText('Words')
    this.add(wordsLabel)

    var wordsInput = new Input
    wordsInput.setId('words')
    this.add(wordsInput)

    this.wordsInput = wordsInput

    var startButton = new Button
    startButton.setType('submit')
    startButton.setText('Start')
    this.add(startButton)
}

onSubmit(callback) {
    super.onSubmit(event => {
        event.preventDefault()

        var value = this.wordsInput.getValue()

        callback(value)
    })
}
}