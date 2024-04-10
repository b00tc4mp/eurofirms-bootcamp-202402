function Area(point, width, height) {
    this.x = { start: point.x, end: point.x + width }
    this.y = { start: point.y, end: point.y + height }
}

function CornerArea(area) {
    this.left = {
        x: {
            start: area.x.start,
            end: area.x.start + 6
        },
        y: {
            start: area.y.start,
            end: area.y.end + 6
        }
    }

    this.right = {
        x: {
            start: area.x.end - 6,
            end: area.x.end
        },
        y: {
            start: area.y.start ,
            end: area.y.end + 6
        }
    }
}

function Point(x, y) {
    this.x = x
    this.y = y
}

function BreakOut2D(width, height, x, y, color, borderRadius) {
    this.width = width
    this.height = height
    this.color = color
    this.borderRadius = borderRadius
    this.position = new Point(x, y)

    this.area = new Area(this.position, width, height)
    this.cornerArea = new CornerArea(this.area)

    var container = document.createElement('div')

    if (borderRadius) {
        container.style.borderRadius = borderRadius
    }

    container.style.position = 'absolute'
    container.style.width = this.width + 'px'
    container.style.height = this.height + 'px'
    container.style.backgroundColor = this.color
    container.style.top = this.position.y + 'px'
    container.style.left = this.position.x + 'px'

    this.container = container
}

// location

BreakOut2D.prototype.setX = function (x) {
    this.position = new Point(x, this.position.y)

    this.setArea()

    this.container.style.left = this.position.x + 'px'
}

BreakOut2D.prototype.getX = function () {
    return this.position.x
}

BreakOut2D.prototype.setY = function (y) {
    this.position = new Point(this.position.x, y)

    this.setArea()

    this.container.style.top = this.position.y + 'px'
}

BreakOut2D.prototype.getY = function () {
    return this.position.y
}

BreakOut2D.prototype.setLocation = function (x, y) {
    this.point = new Point(x, y)
}

BreakOut2D.prototype.setArea = function () {
    this.area = new Area(this.position, this.width, this.height)

    this.cornerArea = new CornerArea(this.area)
}

BreakOut2D.prototype.getArea = function () {
    return this.area
}

BreakOut2D.prototype.getCornerArea = function () {
    return this.cornerArea
}
// dimensions

BreakOut2D.prototype.setWidth = function (width) {
    this.width = width

    this.setArea()


    this.container.style.width = this.width + 'px'
}

BreakOut2D.prototype.getWidth = function () {
    return this.width
}

BreakOut2D.prototype.setHeight = function (height) {
    this.height = height

    this.setArea()

    this.container.style.height = this.height + 'px'
}

BreakOut2D.prototype.getHeight = function () {
    return this.height
}

BreakOut2D.prototype.setDimensions = function (width, height) {
    this.setWidth(width)
    this.setHeight(height)
}

// Ball

function Ball(width, height, x, y, color, borderRadius) {
    BreakOut2D.call(this, width, height, x, y, color, borderRadius)

}

Ball.prototype = Object.create(BreakOut2D.prototype)
Ball.prototype.constructor = Ball


// Block

function Block(width, height, x, y, color) {
    BreakOut2D.call(this, width, height, x, y, color)
}

Block.prototype = Object.create(BreakOut2D.prototype)
Block.prototype.constructor = Block

// var blockBar

var blockBar = new Block(120, 13, 183, 420, 'yellow')


var bars = [
    new Block(45, 5, 286, 140, 'orange'),
    new Block(45, 5, 286, 130, 'orange'),
    new Block (45, 5, 400, 130, 'orange')
]

bars.forEach(function (bar) {
    document.body.appendChild(bar.container)
})


// var ball

var ball = new Ball(13, 13, 300, 407, 'black', '50%')

var ballBounceBar = true

var ballXMovement = 0

setInterval(function () {
    var { x: ballXArea, y: ballYArea } = ball.getArea()

    var { x: blockBarXArea, y: blockBarYArea } = blockBar.getArea()

    var { left: leftBlockBarCornerArea } = blockBar.getCornerArea()

    var { right: rightBlockBarCornerArea } = blockBar.getCornerArea()

    var newY
    var newX = ball.getX() + ballXMovement

    bars.forEach(function (bar) {
        var { x: barXArea, y: barYArea } = bar.getArea()


        if (!ballBounceBar) {
            newY = ball.getY() + 2



            if (ballYArea.end >= blockBarYArea.start && ballYArea.end <= blockBarYArea.end &&
                (ballXArea.end >= blockBarXArea.start && ballXArea.end <= blockBarXArea.end || 
                ballXArea.start <= blockBarXArea.end && ballXArea.start >= blockBarXArea.start )) {

                if (ballYArea.end >= leftBlockBarCornerArea.y.start && ballYArea.end <= leftBlockBarCornerArea.y.end &&
                    ballXArea.end >= leftBlockBarCornerArea.x.start && ballXArea.end <= leftBlockBarCornerArea.x.end) {
                        ballXMovement = -1

                }
                else if (ballYArea.end >= rightBlockBarCornerArea.y.start && ballYArea.end <= rightBlockBarCornerArea.y.end &&
                    ballXArea.start <= rightBlockBarCornerArea.x.end && ballXArea.start >= rightBlockBarCornerArea.x.start) {
                        ballXMovement = 1
                }

                ballBounceBar = true
            }
        }
        else if (ballBounceBar) {
            newY = ball.getY() - 2

            if (ballYArea.start <= barYArea.end && ballYArea.start >= barYArea.start &&
                ballXArea.start <= barXArea.end && ballXArea.start >= barXArea.start) {

                bar.container.remove()
                bar.setDimensions(0, 0)

                ballBounceBar = false
            }
        }
    })

    ball.setX(newX)
    ball.setY(newY)
}, 10)


// vars bar

// var bar = new Block(45, 5, 'red')
// bar.setLocation(180, 160)

// var bar1 = new Block(45, 5, 'blue')
// bar1.setLocation(233, 160)

// var bar2 = new Block(45, 5, 'orange')
// bar2.setLocation(286, 160)

// var bar3 = new Block(45, 5, 'brown')
// bar3.setLocation(339, 160)

// var bar4 = new Block(45, 5, 'pink')
// bar4.setLocation(392, 160)

// var bar5 = new Block(45, 5, 'green')
// bar5.setLocation(445, 160)

// var bar6 = new Block(45, 5, 'red')
// bar6.setLocation(180, 140)

// var bar7 = new Block(45, 5, 'blue')
// bar7.setLocation(233, 140)

// var bar9 = new Block(45, 5, 'brown')
// bar9.setLocation(339, 140)

// var bar10 = new Block(45, 5, 'pink')
// bar10.setLocation(392, 140)

// var bar11 = new Block(45, 5, 'green')
// bar11.setLocation(445, 140)

// appendchild

document.body.appendChild(blockBar.container)
document.body.appendChild(ball.container)
// document.body.appendChild(bar.container)
// document.body.appendChild(bar1.container)
// document.body.appendChild(bar2.container)
// document.body.appendChild(bar3.container)
// document.body.appendChild(bar4.container)
// document.body.appendChild(bar5.container)
// document.body.appendChild(bar6.container)
// document.body.appendChild(bar7.container)
// document.body.appendChild(bar8.container)
// document.body.appendChild(bar9.container)
// document.body.appendChild(bar10.container)
// document.body.appendChild(bar11.container)

// move

document.onkeydown = function (event) {

    //blockBar
    if (event.key === 'ArrowLeft')
        blockBar.setX(blockBar.getX() - 6)
    else if (event.key === 'ArrowRight')
        blockBar.setX(blockBar.getX() + 6)

    // ball
    // else if (event.key === 'a' || event.key === 'A') {
    //     ball.setX(ball.getX() - 10)
    // }
    // else if (event.key === 'd' || event.key === 'D') {
    //     ball.setX(ball.getX() + 10)
    // }
    // else if (event.key === 'w' || event.key === 'W') {
    //     ball.setY(ball.getY() - 10)
    // }
    // else if (event.key === 's' || event.key === 'S') {
    //     ball.setY(ball.getY() + 10)

    // }

}

