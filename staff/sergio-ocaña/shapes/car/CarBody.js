class CarBody extends Shape2D {
    constructor(width, height, color) {
        super(width, height, color)

        const windowRight = new Window(width, height)
        windowRight.setLocation(this.width - windowRight.width, 20)
        windowRight.setStyle('borderTopRigthRadius', '20%')
        this.add(windowRight)

        const windowLeft = new Window(width, height)
        windowLeft.setLocation(this.width - 2 * (windowLeft.width), 20)
        this.add(windowLeft)

        this.setStyle('borderRadius', '10px 10px 0 10px')
    }
}