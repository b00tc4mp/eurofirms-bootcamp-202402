function CarBody(width, height, color) {
    Shape2D.call(this, width, height, color)

    var windowRight= new Window(width, height)

    windowRight.setLocation(this.width - windowRight.width /0.92, this.height - windowRight.width / 0.63)
    windowRight.setStyle('borderTopRightRadius', '45%')

    this.add(windowRight)

    var windowLeft = new Window(width, height)

    windowLeft.setLocation(this.width - windowRight.width - (windowLeft.width / 0.8) , this.height - windowRight.width/0.63)
    this.add(windowLeft)

    this.setStyle('borderRadius', '10% 20% 0 10%')
}

CarBody.prototype = Object.create(Shape2D.prototype)
CarBody.prototype.constructor = CarBody

