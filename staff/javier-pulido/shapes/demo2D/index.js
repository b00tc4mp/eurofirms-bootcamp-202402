function Shape2D(width, height,color) {
    this.width = width
    this.height = height
    this.color = color

    this.x = 0
    this.y = 0

    var container = document.createElement('div')

    container.style.position = 'absolute'
    container.style.left = this.x + 'px'
    container.style.top = this.y + 'px'
    container.style.width = this.y + 'px'
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

Shape2D.prototype.getHeigth = function () {
    return this.height
}

Shape2D.prototype.setDimensions = function (width, height) {
    this.setWidth(width)
    this.setHeight(height)
}

// person

function Person(width, height, hairColor, sweeterColor, trousersColor) {
    Shape2D.call(this, width, height, 'transparent')

    var head = new Shape2D(this.getWidth() / 3, this.getHeigth() / 8, 'bisque')

    var hair = new Shape2D(head.getWidth(), head.getHeigth() / 8, hairColor)

    head.container.appendChild(hair.container)

    var leftEye = new Shape2D(head.getWidth() / 5, head.getWidth() / 5, 'black')
    leftEye.setX(head.getWidth() / 5)
    leftEye.setY(head.getHeigth() / 3)

    head.container.appendChild(leftEye.container)

    var rightEye = new Shape2D(head.getWidth() / 5, head.getWidth() / 5, 'black')
    rightEye.setX(head.getWidth() * 3 / 5)
    rightEye.setY(head.getHeigth() / 3)

    head.container.appendChild(rightEye.container)

    var leftArm = new Shape2D(head.getWidth() / 2, head.getHeigth() * 3.5, sweeterColor)
    leftArm.setY(head.getHeigth() * 1.5)

    var shoulders = new Shape2D(this.getWidth(), head.getHeigth() / 2, sweeterColor)
    shoulders.setY(head.getHeigth())

    var body = new Shape2D(head.getWidth() * 2, head.getHeigth() * 3,  sweeterColor)
    body.container.style.borderLeft = '1px solid black'
    body.container.style.borderRigth = '1px solid black'
    body.container.style.boxSizing = 'border-box'
    body.setX(leftArm.getWidth())
    body.setY(head.getHeigth() * 1.5)

    var hip = new Shape2D(body.getWidth(), head.getHeigth(), trousersColor)
    hip.container.style.borderTop = '1px solid black'
    hip.container.style.borderLeft = '1px solid black'
    hip.container.style.borderRight = '1px solid black'
    hip.container.style.boxSizing = 'border-box'
    hip.setX(leftArm.getWidth())
    hip.setY(head.getHeigth() + body.getHeigth())

    head.setX(body.getX() + body.getWidth() / 2 - head.getWidth() / 2)

    var rightArm = new Shape2D(head.getWidth() / 2, head.getHeigth() * 3.5, sweeterColor)
    rightArm.setX(leftArm.getWidth() + body.getWidth())
    rightArm.setY(head.getHeigth() * 1.5)

    var leftLeg = new Shape2D(head.getWidth() * 3 / 4, head.getHeigth() * 3, trousersColor)
    leftLeg.setX(leftArm.getWidth)
    leftLeg.setY(head.getHeigth() * 2 + body.getHeigth())

    var rightLeg = new Shape2D(head.getWidth() * 3 / 4, head.getHeigth() * 3, trousersColor)
    rightLeg.setX(leftArm.getWidth() + body.getWidth() - rightLeg.getWidth())
    rightLeg.setY(head.getHeigth() * 2 + body.getHeigth())

    this.container.appendChild(head.container)
    this.container.appendChild(shoulders.container)
    this.container.appendChild(body.container)
    this.container.appendChild(hip.container)
    this.container.appendChild(leftArm.container)
    this.container.appendChild(rightArm.container)
    this.container.appendChild(leftLeg.container)
    this.container.appendChild(rightLeg.container)
}

Person.prototype = Object.create(Shape2D.prototype)
Person.prototype.constructor = Person

// skate

function Skate(length) {
    Shape2D.call(this, length, 5, 'black')

    var leftWheel = new Shape2D(10, 10, 'black')
    leftWheel.container.style.borderRadius = '50%'
    leftWheel.setX(10)
    leftWheel.setY(7)

    var rightWheel = new Shape2D(10, 10, 'black')
    rightWheel.container.style.borderRadiues = '50%'
    rightWheel.setX(this.getWidth() - 20)
    rightWheel.setY(7)

    this.container.appendChild(leftWheel.container)
    this.container.appendChild(rightWheel.container)
}

Skate.prototype = Object.create(Shape2D.prototype)
Skate.prototype.constructor = Skate

// demo 

var skate = new Skate(100)

skate.setLocation(180, 280)

var adrian = new Person(60, 175, 'dodgerblue', 'red', 'blue')
adrian.setLocation(200, 100)

var ana = new Person(45, 161, 'brown', 'greenyellow', 'black')
ana.setLocation(100, 100)

var kid = new Person(20, 80, 'gold', 'dodgerblue', 'magenta')
kid.setLocation(150, 200)

document.body.appendChild(skate.container)
document.body.appendChild(adrian.container)
document.body.appendChild(and.container)
document.body.appendChild(kid.container)

document.onkeydown = function (event) {
    console.log(event.key)

    if (event.key === 'ArrowLeft')
        adrian.setX(adrian.getX() - 10)
    else if (event.key === 'ArrowRigth')
        adrian.setX(adrian.getX() + 10)
    else if (event.key === 'ArrowUp')
        adrian.setY(adrian.getY() -10)
    else if (event.key === 'ArrowDown')
        adrian.setY(adrian.getY() + 10)
    
}