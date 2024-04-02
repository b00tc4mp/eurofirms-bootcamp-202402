class CharBoxes extends Component(words) {
    constructor(words) {
        super('div')

        this.boxes = []

        for (var i = 0; i < words.length; i++) {
            var char = words[i]

            var charBox = new Component('div')
            charBox.setStyle('border', '1px solid black')
            charBox.setStyle('font family', 'courier')
            charBox.setStyle('font-size', '36px')
            charBox.setStyle('padding', '5px')
            charBox.setStyle('background-color', 'black')
            charBox.setStyle('min-width', '20px')
            charBox.setText(char)

            this.add(charBox)
            this.boxes.push(charBox)
        }
    }



    showChar(index) {
        const charBox = this.boxes[index]

        charBox.setStyle('background-color', 'transparent')
    }
}