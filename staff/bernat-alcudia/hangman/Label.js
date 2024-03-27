class Label extends this.Component {
    constructor() {
        super('label')
    }

    setFor(htmlFor) {
        this.container.htmlFor = htmlFor
    }

}