(function () {
    function Shape2D() {
        this.width = 0
        this.height = 0
    }

    Shape2D.prototype.getWidthInPixels = function () {
        return this.width + 'px'
    }

    Shape2D.prototype.getHeightInPixels = function () {
        return this.height + 'px'
    }


    /*
    var adrian = new Shape2D
    
    adrian.width = 60
    adrian.height = 175
    //adrian.depth = 30
    
    console.log(adrian.getWidthInPixels(), adrian.getHeightInPixels())
    
    
    var box = document.createElement('div')
    
    box.style.width = adrian.getWidthInPixels()
    box.style.height = adrian.getHeightInPixels()
    box.style.backgroundColor = 'dodgerblue'
    
    document.body.appendChild(box)
    */

    function Shape3D(width, height, depth, color) {
        this.width = width
        this.height = height
        this.depth = depth
        this.color = color

        var box = document.createElement('div')
        box.id = 'box'
        box.style.transformStyle = 'preserve-3d'
        box.style.position = 'absolute'
        box.style.left = '0px'
        box.style.top = '0px'
        box.style.width = this.getWidthInPixels()
        box.style.height = this.getHeightInPixels()
        box.style.backgroundColor = this.color

        var bottom = document.createElement('div')
        bottom.id = 'bottom'
        bottom.style.width = this.getWidthInPixels()
        bottom.style.height = this.getHeightInPixels()
        bottom.style.backgroundColor = this.color
        bottom.style.transform = 'translate3d(0, 0, 0)'
        bottom.style.opacity = 0.8
        box.appendChild(bottom)

        var top = document.createElement('div')
        top.id = 'top'
        top.style.width = this.getWidthInPixels()
        top.style.height = this.getHeightInPixels()
        top.style.backgroundColor = this.color
        top.style.transform = 'translate3d(0, -' + this.getHeightInPixels() + ', ' + this.getDepthInPixels() + ')'
        top.style.opacity = 0.8
        box.appendChild(top)

        var left = document.createElement('div')
        left.id = 'left'
        left.style.height = this.getHeightInPixels()
        left.style.width = this.getDepthInPixels()
        left.style.backgroundColor = this.color
        left.style.transform = 'translate3d(-' + this.depth / 2 + 'px, -' + 2 * this.height + 'px, ' + this.depth / 2 + 'px) rotate3d(0, 1, 0, 90deg)'
        left.style.opacity = 0.8
        box.appendChild(left)

        var right = document.createElement('div')
        right.id = 'right'
        right.style.height = this.getHeightInPixels()
        right.style.width = this.getDepthInPixels()
        right.style.backgroundColor = this.color
        right.style.transform = 'translate3d(' + (this.width - this.depth / 2) + 'px, -' + 3 * this.height + 'px, ' + this.depth / 2 + 'px) rotate3d(0, 1, 0, 90deg)'
        right.style.opacity = 0.8
        box.appendChild(right)

        this.container = box
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

    Shape3D.prototype.paint = function (container) {
        container.appendChild(this.container)
    }

    var space = document.createElement('div')
    space.id = 'space'
    space.style.position = 'absolute'
    space.style.left = '0px'
    space.style.top = '0px'
    space.style.width = '100%'
    space.style.backgroundColor = 'skyblue'

    var adrian = new Shape3D(60, 175, 30, 'dodgerblue')
    adrian.container.style.transform = 'translate(100px, 200px) rotate3d(1, 1, 0, -50deg)'
    adrian.paint(space)

    var david = new Shape3D(65, 180, 40, 'black')
    david.container.style.transform = 'translate(300px, 100px) rotate3d(1, 1, 0, -30deg)'
    david.paint(space)

    var jose = new Shape3D(60, 170, 35, 'blue')
    jose.container.style.transform = 'translate(200px, 100px) rotate3d(1, 1, 0, -30deg)'
    jose.paint(space)

    document.body.appendChild(space)
})()


