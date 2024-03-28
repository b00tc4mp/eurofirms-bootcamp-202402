function Pinpong2D(width, height, color, borderRadius) {
    this.width = width
    this.height = height
    this.color = color

    this.x = 0
    this.y = 0

    this.borderRadius = borderRadius

    var container = document.createElement('div')
    if (borderRadius !== undefined) {
        container.style.borderRadius = '50%'
    }
    container.style.position = 'absolute'
    container.style.left = this.x + 'px'
    container.style.top = this.y + 'px'
    container.style.width = this.width + 'px'
    container.style.height = this.height + 'px'
    container.style.backgroundColor = this.color

    this.container = container

}

// location
Pinpong2D.prototype.setX = function (x) {
    this.x = x

    this.container.style.left = this.x + 'px'
}

Pinpong2D.prototype.getX = function () {
    return this.x
}

Pinpong2D.prototype.setY = function (y) {
    this.y = y

    this.container.style.top = this.y + 'px'
}

Pinpong2D.prototype.getY = function () {
    return this.y
}

Pinpong2D.prototype.setLocation = function (x, y) {
    this.setX(x)
    this.setY(y)
}

// dimensions

Pinpong2D.prototype.setWidth = function (width) {
    this.width = width

    this.container.style.width = this.width + 'px'
}

Pinpong2D.prototype.getWidth = function () {
    return this.width
}

Pinpong2D.prototype.setHeight = function (height) {
    this.height = height

    this.container.style.height = this.height + 'px'
}

Pinpong2D.prototype.getHeight = function () {
    return this.height
}

Pinpong2D.prototype.setDimensions = function (width, height) {
    this.setWidth(width)
    this.setHeight(height)
}
// block
function Block(width, height, blockColor, borderRadius) {
    Pinpong2D.call(this, width, height, blockColor, borderRadius)

}

Block.prototype = Object.create(Pinpong2D.prototype)
Block.prototype.constructor = Block

var racketLeft = new Block(10, 70, 'red')
racketLeft.setLocation(40, 160)
document.body.appendChild(racketLeft.container)

var racketRight = new Block(10, 70, 'purple')
racketRight.setLocation(320, 160)
document.body.appendChild(racketRight.container)

var ball = new Block(10, 10, 'black', 'redonda')
ball.setLocation(100, 180)
document.body.appendChild(ball.container)

//move
document.onkeydown = function (event) {
    console.log(event.key)

    if (event.key === 'ArrowUp') {
        racketLeft.setY(racketLeft.getY() - 10)
        racketRight.setY(racketLeft.getY() - 10)
    }
    else if (event.key === 'ArrowDown') {
        racketLeft.setY(racketLeft.getY() + 10)
        racketRight.setY(racketRight.getY() + 10)
    }

    else if (event.key === 'a' || event.key === 'A') {
        ball.setX(ball.getX() - 10)
    }
    else if (event.key === 'd' || event.key === 'D') {
        ball.setX(ball.getX() + 10)
    }
    else if (event.key === 'w' || event.key === 'W') {
        ball.setY(ball.getY() - 10)
    }
    else if (event.key === 's' || event.key === 'S') {
        ball.setY(ball.getY() + 10)
    }
}