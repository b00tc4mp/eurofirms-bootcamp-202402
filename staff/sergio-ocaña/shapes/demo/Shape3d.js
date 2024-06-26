function Shape3D(width, height, depth, color, transX = 0, transY = 0) {
    this.width = width
    this.height = height
    this.depth = depth
    this.color = color
    this.transX = transX
    this.transY = transY
    this.rotX = 0
    this.rotY = 0
    this.rotZ = 0
    this.rotDegs = 0


    var box = document.createElement('div')
    box.id = 'box'
    box.style.transformStyle = 'preserve-3d'
    box.style.position = 'absolute'
    box.style.left = '0px'
    box.style.up = '0px'
    box.style.width = this.getWidthInPixels()
    box.style.height = this.getHeightInPixels()
    box.style.backgroundColor = this.color

    var fingertip = document.createElement('div')
    fingertip.id = 'fingertip'
    fingertip.style.position = 'absolute'
    fingertip.style.width = this.getWidthInPixels()
    fingertip.style.height = this.getDepthInPixels()
    fingertip.style.boxSizing = 'border-box'
    fingertip.style.border = (this.getDepthInPixels() * 0.11) + 'solid white'
    fingertip.style.backgroundColor = this.color
    fingertip.style.transform = 'translate3d(' + 0 + 'px, -' + this.depth / 2 + 'px, ' + this.depth / 2 + 'px)' + 'rotate3d(1,0,0,90deg)'
    fingertip.style.border = '1px solid black'
    box.appendChild(fingertip);

    var bottomtip = document.createElement('div')
    bottomtip.id = 'bottomtip'
    bottomtip.style.position = 'absolute'
    bottomtip.style.width = this.getWidthInPixels()
    bottomtip.style.height = this.getDepthInPixels()
    bottomtip.style.boxSizing = 'border-box'
    bottomtip.style.border = (this.getDepthInPixels() * 0.11) + 'solid white'
    bottomtip.style.backgroundColor = this.color
    bottomtip.style.transform = bottomtip.style.transform = 'translate3d(0, ' + (this.height - (this.depth / 2)) + 'px, ' + this.depth / 2 + 'px) rotateX(90deg)'
    bottomtip.style.border = '1px solid black'
    box.appendChild(bottomtip);

    var bottom = document.createElement('div')
    bottom.id = 'bottom'
    bottom.style.width = this.getWidthInPixels()
    bottom.style.height = this.getHeightInPixels()
    bottom.style.backgroundColor = this.color
    bottom.style.transform = 'translate3d(0, 0, 0)'
    bottom.style.boxSizing = 'border-box'
    bottom.style.border = '1px solid black'
    box.appendChild(bottom)

    var up = document.createElement('div')
    up.id = 'up'
    up.style.width = this.getWidthInPixels()
    up.style.height = this.getHeightInPixels()
    up.style.backgroundColor = this.color
    up.style.transform = 'translate3d(0, -' + this.getHeightInPixels() + ', ' + this.getDepthInPixels() + ')'
    up.style.boxSizing = 'border-box'
    up.style.border = '1px solid black'

    box.appendChild(up)

    var left = document.createElement('div')
    left.id = 'left'
    left.style.height = this.getHeightInPixels()
    left.style.width = this.getDepthInPixels()
    left.style.backgroundColor = this.color
    left.style.transform = 'translate3d(-' + this.depth / 2 + 'px, -' + 2 * this.height + 'px, ' + this.depth / 2 + 'px) rotate3d(0, 1, 0, 90deg)'
    left.style.boxSizing = 'border-box'
    left.style.border = '1px solid black'
    box.appendChild(left)

    var right = document.createElement('div')
    right.id = 'right'
    right.style.height = this.getHeightInPixels()
    right.style.width = this.getDepthInPixels()
    right.style.backgroundColor = this.color
    right.style.transform = 'translate3d(' + (this.width - this.depth / 2) + 'px, -' + 3 * this.height + 'px, ' + this.depth / 2 + 'px) rotate3d(0, 1, 0, 90deg)'
    right.style.boxSizing = 'border-box'
    right.style.border = '1px solid black'
    box.appendChild(right)

    this.bottom = bottom
    this.up = up
    this.right = right
    this.left = left
    this.fingertip = fingertip
    this.bottomtip = bottomtip
    this.container = box

    this.container.style.transform = this.getTranslate()
}

Shape3D.prototype.getWidthInPixels = function () {
    return this.width + 'px'
}

Shape3D.prototype.getHeightInPixels = function () {
    return this.height + 'px'
}

Shape3D.prototype.getDepthInPixels = function () {
    return this.depth + 'px'
}
Shape3D.prototype.getTranslateX = function () {
    return this.transX
}
Shape3D.prototype.getTranslateY = function () {
    return this.transY
}
Shape3D.prototype.getTranslate = function () {
    return 'translate(' + this.getTranslateX() + 'px,' + this.getTranslateY() + 'px)'
}
Shape3D.prototype.addTraslate = function (x, y) {
    this.transX += x
    this.transY += y
    return this.container.style.transform = this.getTranslate() + this.getRotation()
}
Shape3D.prototype.getRotation = function () {
    return 'rotate3d(' + this.rotX + ',' + this.rotY + ',' + this.rotZ + ',' + this.rotDegs + 'deg)'
}

Shape3D.prototype.setColor = function (color) {
    this.bottom.style.backgroundColor = color
    this.up.style.backgroundColor = color
    this.left.style.backgroundColor = color
    this.right.style.backgroundColor = color
    this.bottomtip.style.backgroundColor = color
    this.fingertip.style.backgroundColor = color
}

Shape3D.prototype.setRotate = function (x, y, z, degs) {
    this.rotX += x
    this.rotY += y
    this.rotZ += z
    this.rotDegs = degs
    return this.container.style.transform = this.getTranslate() + this.getRotation()
}
Shape3D.prototype.paint = function (container) {
    container.appendChild(this.container)
}