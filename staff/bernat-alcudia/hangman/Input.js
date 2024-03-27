class Input extends this.Component {
    constructor() {
        super('input')
    }




    getValue() {
        return this.container.value
    }

    setMaxLenght(maxLength) {
        this.container.maxLength = maxLength
    }

    setType(type) {
        this.container.type = type
    }

}