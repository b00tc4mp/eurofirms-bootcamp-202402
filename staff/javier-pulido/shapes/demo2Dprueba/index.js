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

// bola

function bola(width, height) {
    Shape2D.call(this, width, height, 'transparent')

     var head = new Shape2D(this.getWidth() / 1, this.getHeight() / 2, 'black',)
    this.container.appendChild(head.container)
}

bola.prototype = Object.create(Shape2D.prototype)
bola.prototype.constructor = bola

// blockBar

function blockBar(width, height) {
    Shape2D.call(this, width, height, 'transparent')

    var head = new Shape2D(this.getWidth() / 1, this.getHeight() / 4, 'yellow',)
    this.container.appendChild(head.container)

}

blockBar.prototype = Object.create(Shape2D.prototype)
blockBar.prototype.constructor = blockBar


// bar

function bar(length) {
    Shape2D.call(this, length, 5, 'red')
}

bar.prototype = Object.create(Shape2D.prototype)
bar.prototype.constructor = bar


//bar1

function bar1(length) {
    Shape2D.call(this, length, 5, 'blue')
}

bar1.prototype = Object.create(Shape2D.prototype)
bar1.prototype.constructor = bar1


//bar2

function bar2(length) {
    Shape2D.call(this, length, 5, 'orange')
}

bar2.prototype = Object.create(Shape2D.prototype)
bar2.prototype.constructor = bar2


//bar3

function bar3(length) {
    Shape2D.call(this, length, 5, 'brown')
}

bar3.prototype = Object.create(Shape2D.prototype)
bar3.prototype.constructor = bar3


//bar4

function bar4(length) {
    Shape2D.call(this, length, 5, 'pink')
}

bar4.prototype = Object.create(Shape2D.prototype)
bar4.prototype.constructor = bar4


//bar5

function bar5(length) {
    Shape2D.call(this, length, 5, 'green')
}

bar5.prototype = Object.create(Shape2D.prototype)
bar5.prototype.constructor = bar5



// vars

var bar = new bar(50)

bar.setLocation(180, 160)

var bar1 = new bar1(50)

bar1.setLocation(233, 160)

var bar2 = new bar2(50)

bar2.setLocation(286, 160)

var bar3 = new bar3(50)

bar3.setLocation(339, 160)

var bar4 = new bar4(50)

bar4.setLocation(392, 160)

var bar5 = new bar5(50)

bar5.setLocation(445, 160)


var ball = new bola(14, 20 )
ball.setLocation(350, 410)

var blockBar = new blockBar(120, 40 )
blockBar.setLocation(300, 420)


document.body.appendChild(ball.container)
document.body.appendChild(blockBar.container)
document.body.appendChild(bar.container)
document.body.appendChild(bar1.container)
document.body.appendChild(bar2.container)
document.body.appendChild(bar3.container)
document.body.appendChild(bar4.container)
document.body.appendChild(bar5.container)


//move

document.onkeydown = function (event) {
    console.log(event.key)

    //blockBar
    if (event.key === 'ArrowLeft')
        blockBar.setX(blockBar.getX() - 10)
    else if (event.key === 'ArrowRight')
        blockBar.setX(blockBar.getX() + 10)
    else if (event.key === 'ArrowUp')
        blockBar.setY(blockBar.getY() - 10)
    else if (event.key === 'ArrowDown')
        blockBar.setY(blockBar.getY() + 10)

    // ball
    else if (event.key === 'a')
        ball.setX(ball.getX() - 10)
    else if (event.key === 'd')
        ball.setX(ball.getX() + 10)
    else if (event.key === 'w')
        ball.setY(ball.getY() - 10)
    else if (event.key === 's')
        ball.setY(ball.getY() + 10)

}

