function Window(width, height) {
    Shape2D.call(this, width * 0.35, height * 0.35, 'skyblue')

    var windowBorder = 'solid black ' + (width + height) * 0.01 + 'px'

    this.setStyle('border', windowBorder)
    this.setStyle('zIndex', 3)
}

Window.prototype = Object.create(Shape2D.prototype)
Window.prototype.constructor = Window