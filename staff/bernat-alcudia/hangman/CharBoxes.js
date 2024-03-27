function CharBoxes(words) {
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


CharBoxes.prototype = Object.create(Component.prototype)
CharBoxes.prototype.constructor = CharBoxes

CharBoxes.prototype.showChar = function (index) {
    var charBox = this.boxes[index]

    charBox.setStyle('background-color', 'transparent')
}