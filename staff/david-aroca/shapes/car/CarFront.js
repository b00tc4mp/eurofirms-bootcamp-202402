function CarFront(width, heigth, color) {
    Shape2D.call(this, width, heigth, color)

    this.setStyle('borderRadius', '0 10px 10px 0')
}

CarFront.prototype = Object.create(Shape2D.prototype)
CarFront.prototype.constructor = CarFront