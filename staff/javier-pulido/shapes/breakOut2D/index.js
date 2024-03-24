function BreakOut2D(width, height, color, borderRadius) {
    this.width = width
    this.height = height
    this.color = color
    this.borderRadius = borderRadius

    this.x = 0
    this.y = 0

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

BreakOut2D.prototype.setX = function (x) {
    this.x = x

    this.container.style.left = this.x + 'px'
}

BreakOut2D.prototype.getX = function () {
    return this.x
}

BreakOut2D.prototype.setY = function (y) {
    this.y = y

    this.container.style.top = this.y + 'px'
}

BreakOut2D.prototype.getY = function () {
    return this.y
}

BreakOut2D.prototype.setLocation = function (x, y) {
    this.setX(x)
    this.setY(y)
}

// dimensions

BreakOut2D.prototype.setWidth = function (width) {
    this.width = width

    this.container.style.width = this.width + 'px'
}

BreakOut2D.prototype.getWidth = function () {
    return this.width
}

BreakOut2D.prototype.setHeight = function (height) {
    this.height = height

    this.container.style.height = this.height + 'px'
}

BreakOut2D.prototype.getHeight = function () {
    return this.height
}

BreakOut2D.prototype.setDimensions = function (width, height) {
    this.setWidth(width)
    this.setHeight(height)
}


// Block

function Block(width, height, color, borderRadius) {
    BreakOut2D.call(this, width, height, color, borderRadius)
}

Block.prototype = Object.create(BreakOut2D.prototype)
Block.prototype.constructor = Block

// var blockBar

var blockBar = new Block(120, 13, 'yellow')
blockBar.setLocation(300, 420)

// var ball

var ball = new Block(13, 13, 'black', 'round')
ball.setLocation(350, 407)

// vars bar

var bar = new Block(45, 5, 'red')
bar.setLocation(180, 160)

var bar1 = new Block(45, 5, 'blue')
bar1.setLocation(233, 160)

var bar2 = new Block(45, 5, 'orange')
bar2.setLocation(286, 160)

var bar3 = new Block(45, 5, 'brown')
bar3.setLocation(339, 160)

var bar4 = new Block(45, 5, 'pink')
bar4.setLocation(392, 160)

var bar5 = new Block(45, 5, 'green')
bar5.setLocation(445, 160)

var bar6 = new Block(45, 5, 'red')
bar6.setLocation(180, 140)

var bar7 = new Block(45, 5, 'blue')
bar7.setLocation(233, 140)

var bar8 = new Block(45, 5, 'orange')
bar8.setLocation(286, 140)

var bar9 = new Block(45, 5, 'brown')
bar9.setLocation(339, 140)

var bar10 = new Block(45, 5, 'pink')
bar10.setLocation(392, 140)

var bar11 = new Block(45, 5, 'green')
bar11.setLocation(445, 140)

// appendchild

document.body.appendChild(blockBar.container)
document.body.appendChild(ball.container)
document.body.appendChild(bar.container)
document.body.appendChild(bar1.container)
document.body.appendChild(bar2.container)
document.body.appendChild(bar3.container)
document.body.appendChild(bar4.container)
document.body.appendChild(bar5.container)
document.body.appendChild(bar6.container)
document.body.appendChild(bar7.container)
document.body.appendChild(bar8.container)
document.body.appendChild(bar9.container)
document.body.appendChild(bar10.container)
document.body.appendChild(bar11.container)

// move

document.onkeydown = function (event) {
    console.log(event.key)


    //blockBar
    if (event.key === 'ArrowLeft' )
        blockBar.setX(blockBar.getX() - 10)
    else if (event.key === 'ArrowRight')
        blockBar.setX(blockBar.getX() + 10)

    // ball
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

