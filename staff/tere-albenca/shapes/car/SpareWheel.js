function SpareWheel(width, height) {
    Shape2D.call(this, width, height, 'black')

    var spareWheel = 'solid black ' + (width + height) * 0.15 + 'px'

    this.setStyle('border', spareWheel)
    this.setStyle('zIndex', 4)
}

SpareWheel.prototype = Object.create(Shape2D.prototype)
SpareWheel.prototype.constructor = SpareWheel