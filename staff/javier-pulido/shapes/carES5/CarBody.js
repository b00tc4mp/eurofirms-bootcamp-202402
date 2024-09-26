function CarBody(width, height, color) {
    Shape2D.call(this, width, height, color)

    var windowRight = new Window(width, height)

    windowRight.setLocation(this.width - windowRight.width, 20)
    windowRight.setStyle('borderTopRigthRadius', '20%')

    this.add(windowRight)

    var windowLeft = new Window(width, height)

    windowLeft.setLocation(this.width - 2 * (windowLeft.width), 20)
    this.add(windowLeft)

    this.setStyle('borderRadius', '10px 10px 0 10px')
}

CarBody.prototype = Object.create(Shape2D.prototype)
CarBody.prototype.constructor = CarBody