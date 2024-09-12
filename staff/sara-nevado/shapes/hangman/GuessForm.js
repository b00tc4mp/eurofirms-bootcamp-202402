class GuessForm extends Form {
    constructor() {
        super()

        this.setStyle('display', 'flex')
        this.setStyle('gap', '10px')

        const charLabel = new Label
        charLabel.setFor('char')
        charLabel.setText('character')
        this.add(charLabel)


        const charInput = new Input
        charInput.setId('char')
        charInput.setMaxLength(1)
        charInput.setStyle('width', '20px')
        this.add(charInput)

        this.charInput = charInput

        const guessButton = new Button
        guessButton.setType('submit')
        guessButton.setTex('Guess')
        this.add(guessButton)
    }

    onSubmit(callback) {
        super.onSubmit(event => {
            event.preventDefault()

            const char = this.charInput.getValue()

            this.reset()

            callback(char)


        })
    }
}