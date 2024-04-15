class Wheel extends Shape2D {
    constructor(width, height) {
        super(width, height, 'gray')

        this.setStyle('borderRadius', '50%')

        const wheel = 'solid black' + (width, height) * 0.1 + 'px'

        etStyle('border', wheel)
        etStyle('zIndex', 1)
    }

}