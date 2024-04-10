class StartForm extends Form {
    constructor() {
        super()

        this.setStyle('display', 'flex')
        this.setStyle('gap', '10px')

        const wordsLabel = new Label
        wordsLabel.setFor('words')
        wordsLabel.setText('Words')
        this.add(wordsLabel)

        const wordsInput = new Input
        wordsInput.setId('words')
        wordsInput.setType('password')
        this.add(wordsInput)

        this.wordsInput = wordsInput

        const startButton = new Button
        startButton.setType('submit')
        startButton.setText('Start')
        this.add(startButton)
    }

    onSubmit(callback) {
        super.onSubmit(event => {
            event.preventDefault()

            const words = this.wordsInput.getValue()

            this.reset()

            callback(words)
        })
    }
}