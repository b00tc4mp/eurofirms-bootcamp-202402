function Shape2D(width, height, color) {
    this.width = width
    this.height = height
    this.color = color

    this.x = 0
    this.y = 0

    var container = document.createElement('div')

    container.style.position = 'absolute'
    container.style.left = this.x + '`px'
    container.style.top = this.y + 'px'
    container.style.width = this.width + 'px'
    container.style.height = this.height + 'px'
    container.style.backgroundColor = this.color

    this.container = container
}

Shape2D.prototype.setX = function (x) {
    this.x = x

    this.container.style.left = this.x + 'px'
}

Shape2D.prototype.getX = function (x) {
    return this.x
}

Shape2D.prototype.setY = function (y) {
    this.y = y

    this.container.style.top = this.y + 'px'
}

Shape2D.prototype.getY = function (y) {
    return this.y
}

Shape2D.prototype.setLocation = function (x, y) {
    this.setX(x)
    this.setY(y)
}

Shape2D.prototype.getLocation = function (x, y) {
    return this.getX, this.getY
}