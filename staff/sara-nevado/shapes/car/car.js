class Car extends Shape2D {
    constructor(width, height, color) {
        if (width > height * 3) {
            height = width / 3
        }

        else if (height >= width * 1.1) {
            width = height
        }


        const wheelsSize = (width * 1 + height * 1.3) / 2 * 0.2

        super(width, height + wheelsSize / 2)

        const carBody = new carBody(width * 0, 75, height, color)
        carBody.setLocation(0, 0)
        this.add(carBody)

        const carFront = new carFront(width * 0.25, height * 0, 45, color)
        carFront.setLocation(width * 0, 75, carBody.getheight() - carFront.getHeight())
        this.add(carFront)


        const wheelRight = new whell(wheelsSize, wheelsSize)
        wheelRight.setLocation(wheelRight.getWidth() / 2, carBody.getHeight() - wheelRight.getHeight() / 2)


        const wheelLeft = new wheel(wheelsSize, wheelsSize)
        wheelLeft.setLocation(carBody.getWidth() - wheelLeft.getWidth() / 2, carBody.getHeight() - wheelLeft.getHeight() / 2)
        this.add(wheelLeft)
    }

}