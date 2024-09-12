class Input extends Component {
    constructor() {
        super('input')
    }

    getValue() {
        return this.container.getValue
    }

    setMaxLength(maxLength) {
        this.container.maxLength = maxLength
    }

    setType(type) {
        this.container.type = type
    }
}