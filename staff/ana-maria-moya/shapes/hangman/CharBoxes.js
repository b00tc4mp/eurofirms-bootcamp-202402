class CharBoxes extends Component {
    constructor(words) {
        super('div')

        this.setId('characters')
        this.setStyle('display', 'flex')
        this.setStyle('gap', '5px')
        this.setStyle('margin', '5px')

        this.boxes = []

        // for (var i = 0; i < words.length; i++) {
        for (const i in words) {
            const char = words[i]

            const charBox = new Component('div')
            charBox.setStyle('border', '1px solid black')
            charBox.setStyle('font-family', 'courier')
            charBox.setStyle('font-size', '36px')
            charBox.setStyle('padding', '5px')
            charBox.setStyle('background-color', 'black')
            charBox.setStyle('min-width', '20px')
            charBox.setText(char)

            this.add(charBox)
            // this.boxes.push(charBox)
            this.boxes[i] = charBox
        }
    }

    showChar(index) {
        const charBox = this.boxes[index]

        charBox.setStyle('background-color', 'transparent')
    }
}