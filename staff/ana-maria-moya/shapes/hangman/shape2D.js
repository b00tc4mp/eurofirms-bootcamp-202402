function Shape2D(width, height, color) {
    Component.call(this, 'div')

    this.width = width
    this.height = height
    this.color = color

    this.x = 0
    this.y = 0

    this.container.style.position = 'absolute'
    this.container.style.left = this.x + 'px'
    this.container.style.top = this.y + 'px'
    this.container.style.width = this.width + 'px'
    this.container.style.height = this.height + 'px'
    this.container.style.backgroundColor = this.color
}

Shape2D.prototype = Object.create(Component.prototype)
Shape2D.prototype.constructor = Shape2D

//location

Shape2D.prototype.setX = function (x) {
    this.x = x

    this.container.style.left = this.x + 'px'
}

Shape2D.prototype.getX = function () {
    return this.x
}

Shape2D.prototype.setY = function (y) {
    this.y = y

    this.container.style.top = this.y + 'px'
}

Shape2D.prototype.setLocation = function (x, y) {
    this.setX(x)
    this.setY(y)
}

//dimensiones

Shape2D.prototype.setWidth = function (width) {
    this.width = width

    this.container.style.width = this.width + 'px'
}

Shape2D.prototype.getWidth = function () {
    return this.width
}

Shape2D.prototype.setHeight = function (height) {
    this.height = height

    this.container.style.height = this.height + 'px'
}

Shape2D.prototype.getHeight = function () {
    return this.height
}

Shape2D.prototype.setDimensions = function (width, height) {
    this.setWidth(width)
    this.setHeight(height)
}