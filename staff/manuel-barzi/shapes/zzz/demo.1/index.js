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

    function Shape3D() {
        this.width = 0
        this.height = 0
        this.depth = 0
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

    var adrian = new Shape3D

    adrian.width = 60
    adrian.height = 175
    adrian.depth = 30

    console.log(adrian.getWidthInPixels(), adrian.getHeightInPixels())

    var space = document.createElement('div')
    space.id = 'space'
    space.style.position = 'absolute'
    space.style.left = '100px'
    space.style.top = '100px'

    var box = document.createElement('div')
    box.id = 'box'
    box.style.transformStyle = 'preserve-3d'

    var bottom = document.createElement('div')
    bottom.id = 'bottom'
    bottom.style.width = adrian.getWidthInPixels()
    bottom.style.height = adrian.getHeightInPixels()
    bottom.style.backgroundColor = 'dodgerblue'
    bottom.style.transform = 'translate3d(0, 0, 0)'
    box.appendChild(bottom)

    var top = document.createElement('div')
    top.id = 'top'
    top.style.width = adrian.getWidthInPixels()
    top.style.height = adrian.getHeightInPixels()
    top.style.backgroundColor = 'tomato'
    top.style.transform = 'translate3d(0, -' + adrian.getHeightInPixels() + ', ' + adrian.getDepthInPixels() + ')'
    box.appendChild(top)

    var left = document.createElement('div')
    left.id = 'left'
    left.style.height = adrian.getHeightInPixels()
    left.style.width = adrian.getDepthInPixels()
    left.style.backgroundColor = 'yellowgreen'
    left.style.transform = 'translate3d(-' + adrian.depth / 2 + 'px, -' + 2 * adrian.height + 'px, ' + adrian.depth / 2 + 'px) rotate3d(0, 1, 0, 90deg)'
    box.appendChild(left)

    var right = document.createElement('div')
    right.id = 'right'
    right.style.height = adrian.getHeightInPixels()
    right.style.width = adrian.getDepthInPixels()
    right.style.backgroundColor = 'cyan'
    right.style.transform = 'translate3d(' + (adrian.width - adrian.depth / 2) + 'px, -' + 3 * adrian.height + 'px, ' + adrian.depth / 2 + 'px) rotate3d(0, 1, 0, 90deg)'
    box.appendChild(right)

    // box.style.transform = 'rotate3d(0, 1, 1, 30deg)'

    var angle = 0
    setInterval(function () {
        angle += 1

        box.style.transform = 'rotate3d(0, 1, 1, ' + angle + 'deg)'
    }, 5)

    space.appendChild(box)

    document.body.appendChild(space)

})()


