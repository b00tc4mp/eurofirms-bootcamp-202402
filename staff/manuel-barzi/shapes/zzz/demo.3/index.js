function Shape2D(width, height, color) {
    this.width = width
    this.height = height
    this.color = color

    this.x = 0
    this.y = 0

    var container = document.createElement('div')

    container.style.position = 'absolute'
    container.style.left = this.x + 'px'
    container.style.top = this.y + 'px'
    container.style.width = this.width + 'px'
    container.style.height = this.height + 'px'
    container.style.backgroundColor = this.color

    this.container = container
}

// location

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

Shape2D.prototype.getY = function () {
    return this.y
}

Shape2D.prototype.setLocation = function (x, y) {
    this.setX(x)
    this.setY(y)
}

// dimensions

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


// test

var head = new Shape2D(20, 20, 'bisque')

var leftArm = new Shape2D(10, 70, 'red')
leftArm.setY(head.getHeight())

var body = new Shape2D(40, 80, 'dodgerblue')
body.setX(leftArm.getWidth())
body.setY(head.getHeight())

head.setX(body.getX() + body.getWidth() / 2 - head.getWidth() / 2)

var rightArm = new Shape2D(10, 70, 'red')
rightArm.setX(leftArm.getWidth() + body.getWidth())
rightArm.setY(head.getHeight())

var leftLeg = new Shape2D(15, 75, 'red')
leftLeg.setX(leftArm.getWidth())
leftLeg.setY(head.getHeight() + body.getHeight())

var rightLeg = new Shape2D(15, 75, 'red')
rightLeg.setX(leftArm.getWidth() + body.getWidth() - rightLeg.getWidth())
rightLeg.setY(head.getHeight() + body.getHeight())

var adrian = new Shape2D(60, 175, 'transparent')

adrian.setLocation(200, 100)

adrian.container.appendChild(head.container)
adrian.container.appendChild(body.container)
adrian.container.appendChild(leftArm.container)
adrian.container.appendChild(rightArm.container)
adrian.container.appendChild(leftLeg.container)
adrian.container.appendChild(rightLeg.container)

document.body.appendChild(adrian.container)

document.onkeydown = function (event) {
    console.log(event.key)

    if (event.key === 'ArrowLeft')
        adrian.setX(adrian.getX() - 10)
    else if (event.key === 'ArrowRight')
        adrian.setX(adrian.getX() + 10)
    else if (event.key === 'ArrowUp')
        adrian.setY(adrian.getY() - 10)
    else if (event.key === 'ArrowDown')
        adrian.setY(adrian.getY() + 10)

}


