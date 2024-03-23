function Shape2D(width, height, color){
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
    container.style.height = this.height +' px'
    container.style.backgroundColor = this.color

    this.container = container
}

//location 

Shape2D.prototype.setX = function(x){
    this.x = x

    this.container.style.left = this.x + 'px'
}

Shape2D.prototype.getX = function(){
    return this.x
}

Shape2D.prototype.setY = function(y){
    this.y = y

    this.container.style.top = this.y + 'px'
}

Shape2D.prototype.getY = function (){
    return this.y
}

Shape2D.prototype.setWidth = function (){
    this.setWidth(width)
    this.setHeight(height)
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

//insect

function insect(width, height, ){
    Shape2D.call( this, width, height,'transparent')
    //aliceBlue, gold, GhostWhite, black, darkred,fireBrick
    var head = new Shape2D(this.getWidth()/5, this.getHeight()/3, 'black')
    
    var antennae = new Shape2D(head.getWidth()/25, head.getHeight()/5)
    
    head.container.appendChild(antennae.container)

    
    var leftEye = new Shape2D(head.getWidth() / 5, head.getWidth() / 5, 'black')
    leftEye.setX(head.getWidth() / 5)
    leftEye.setY(head.getHeight() / 3)

    head.container.appendChild(leftEye.container)

    var rightEye = new Shape2D(head.getWidth() / 5, head.getWidth() / 5, 'black')
    rightEye.setX(head.getWidth() * 3 / 5)
    rightEye.setY(head.getHeight() / 3)

    head.container.appendChild(rightEye.container)
}


//var thorax = new Shape2D(head.getWidth(), head.getHeight()/3, 'black')