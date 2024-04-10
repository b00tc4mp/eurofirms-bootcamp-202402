function CarFront(width, height, color) {
    Shape2D.call(this, width, height, color)

    this.setStyle('borderRadius', '0 10px 10px 0')
}

CarFront.prototype = Object.create(Shape2D.prototype)
CarFront.prototype.contructor = CarFront