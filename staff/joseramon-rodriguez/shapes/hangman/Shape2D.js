class Shape2D extends Component {
    constructor(width, height, color) {
        super('div')

        this.width = width
        this.height = height
        this.color = color

        this.x = 0
        this.y = 0

        this.container.style.position = 'absolute'
        this.container.style.left = this.x + 'px'
        this.container.style.top = this.y + 'px'
        this.container.style.width = this.width + 'px'
        this.container.style.height = this.height + 'px'
        this.container.style.backgroundColor = this.color
    }
    // location

    setX(x) {
        this.x = x

        this.container.style.left = this.x + 'px'
    }

    getX() {
        return this.x
    }

    setY(y) {
        this.y = y

        this.container.style.top = this.y + 'px'
    }

    getY() {
        return this.y
    }

    setLocation(x, y) {
        this.setX(x)
        this.setY(y)
    }

    // dimensions

    setWidth(width) {
        this.width = width

        this.container.style.width = this.width + 'px'
    }

    getWidth() {
        return this.width
    }

    setHeight(height) {
        this.height = height

        this.container.style.height = this.height + 'px'
    }

    getHeight() {
        return this.height
    }

    setDimensions(width, height) {
        this.setWidth(width)
        this.setHeight(height)
    }
}