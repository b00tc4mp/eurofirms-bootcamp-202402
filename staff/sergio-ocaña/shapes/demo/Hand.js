
function Hand(width, height, depth, color, translateX, translateY) {
    Shape3D.call(this,)
    this.color = color
    this.positionX
    this.boxX = 10
    this.boxY = 0
    this.boxZ = 0
    this.translateX = translateX
    this.translateY = translateY

    var space = document.createElement('div')
    space.style.transformStyle = 'preserve-3d'
    space.id = 'space'
    space.style.position = 'absolute'
    space.style.left = '0px'
    space.style.up = '0px'
    space.style.width = '100%'
    space.style.height = '100%'
    space.style.backgroundColor = 'transparent'
    // space.style.width = '500px'
    // space.style.height = '500px'

    var boxRotateX = document.createElement('div')
    boxRotateX.style.transformStyle = 'preserve-3d'
    boxRotateX.id = 'boxRotateX'
    boxRotateX.style.position = 'absolute'
    boxRotateX.style.left = '0px'
    boxRotateX.style.up = '0px'
    boxRotateX.style.width = '100%'
    boxRotateX.style.height = '100%'
    boxRotateX.style.backgroundColor = 'transparent'

    var boxRotateY = document.createElement('div')
    boxRotateY.style.transformStyle = 'preserve-3d'
    boxRotateY.id = 'boxRotateY'
    boxRotateY.style.position = 'absolute'
    boxRotateY.style.left = '0px'
    boxRotateY.style.up = '0px'
    boxRotateY.style.width = '100%'
    boxRotateY.style.height = '100%'
    boxRotateY.style.backgroundColor = 'transparent'
    //total width= middleFinger.width *1.2 + middleFinger.width*0.8+ middleFinger.width*3


    var middleFinger = new Shape3D(width / 5, height / 2, depth, this.color, this.translateX + width * 3 / 5, this.translateY)
    // middleFinger.setRotate(1, 1, 0, 20)
    middleFinger.paint(boxRotateX)

    var indexFinger = new Shape3D(middleFinger.width, middleFinger.height * 6.5 / 8, depth, this.color, middleFinger.getTranslateX() - middleFinger.width, middleFinger.getTranslateY() + middleFinger.height * 1.5 / 8)
    // indexFinger.setRotate(1, 1, 0, 20)
    indexFinger.paint(boxRotateX)

    var finger4 = new Shape3D(middleFinger.width, middleFinger.height * 7 / 8, depth, this.color, middleFinger.getTranslateX() + middleFinger.width, middleFinger.getTranslateY() + middleFinger.height * 1 / 8)
    finger4.paint(boxRotateX)
    // finger4.setRotate(1, 1, 0, 20)

    var finger5 = new Shape3D(middleFinger.width * 0.8, middleFinger.height * 2 / 3, depth, this.color, middleFinger.getTranslateX() + middleFinger.width * 2, middleFinger.getTranslateY() + middleFinger.height * 1 / 3)
    finger5.paint(boxRotateX)

    // ejeY = middleFinger.getTranslateY() + middleFinger.height * 2 - thumb.width / 2
    // ejeX = indexFinger.getTranslateX() - thumb.height / 2
    // positionY = ejeY - thumb.height / 2
    // positionX = ejeX - thumb.width / 2
    ejeY = middleFinger.getTranslateY() + middleFinger.height * 2 - middleFinger.width * 1.2 / 2
    ejeX = indexFinger.getTranslateX() - (middleFinger.height * 2 / 3) / 2
    positionY = ejeY - (middleFinger.height * 2 / 3) / 2
    positionX = ejeX - middleFinger.width * 1.2 / 2


    var thumb = new Shape3D(middleFinger.width * 1.2, middleFinger.height * 2 / 3, depth, this.color, positionX, positionY)
    thumb.setRotate(0, 0, -1, 90)
    thumb.paint(boxRotateX)

    var palm = new Shape3D(indexFinger.width + middleFinger.width + finger4.width + finger5.width, middleFinger.height, middleFinger.depth, this.color, indexFinger.getTranslateX(), middleFinger.getTranslateY() + middleFinger.height)
    palm.paint(boxRotateX)

    this.boxRotateX = boxRotateX
    this.boxRotateY = boxRotateY
    this.space = space
    this.finger4 = finger4
    this.finger5 = finger5
    this.middleFinger = middleFinger
    this.indexFinger = indexFinger
    this.thumb = thumb
    this.palm = palm
    boxRotateX.style.transform = 'rotate3d(0,1,0,' + this.boxX + 'deg)'
    boxRotateY.appendChild(this.boxRotateX)
    space.appendChild(this.boxRotateY)
    document.body.appendChild(space)
}
Hand.prototype = Object.create(Shape3D.prototype)
Hand.prototype.constructor = Hand
Hand.prototype.print = function (container) {
    return container.appendChild(this.container)
}
Hand.prototype.delete = function () {
    this.space.innerText = ""
}
Hand.prototype.changeColor = function (color) {
    this.color = color
    this.finger4.setColor(this.color)
    this.finger5.setColor(this.color)
    this.indexFinger.setColor(this.color)
    this.middleFinger.setColor(this.color)
    this.thumb.setColor(this.color)
    this.palm.setColor(this.color)

}
// Hand.prototype.good = function () {
//     this.finger4.addTraslate(1, 0, 0, 90)
//     this.finger5.addTraslate(1, 0, 0, 90)
//     this.indexFinger.setRotate(1, 0, 0, 90)
//     this.middleFinger.setRotate(1, 0, 0, 90)
//     this.thumb
//     this.
// }
Hand.prototype.getRotX = function () {
    return this.boxX
}
Hand.prototype.getRotY = function () {
    return this.boxY
}
Hand.prototype.getRotZ = function () {
    return this.boxZ
}
Hand.prototype.addRotX = function (x) {
    this.boxX += x
    return this.boxRotateX.style.transform = 'rotate3d(0,1,0,' + (this.getRotX()) + 'deg)'
}
Hand.prototype.addRotY = function (y) {
    this.boxY += y
    return this.boxRotateY.style.transform = 'rotate3d(1,0,0,' + this.getRotY() + 'deg)'
}
Hand.prototype.addRotZ = function (z) {
    this.boxZ += z
    return this.space.style.transform = 'rotate3d(0,0,1,' + this.getRotZ() + 'deg)'
}
Hand.prototype.setRotationDefault = function () {
    this.boxRotateX.style.transform = 'rotate3d(0,1,0,' + 10 + 'deg)'
    this.boxRotateY.style.transform = 'rotate3d(0,0,0,0)'
}
Hand.prototype.resetRotation = function () {
    this.boxX = 10
    this.boxY = 0
    this.boxZ = 0
    this.addRotX(0)
    this.addRotY(0)
    this.addRotZ(0)
}