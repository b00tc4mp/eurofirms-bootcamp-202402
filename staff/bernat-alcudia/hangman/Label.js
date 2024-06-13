class Label extends Component {
    constructor() {
        super('label')
    }

    setFor(htmlFor) {
        this.container.htmlFor = htmlFor
    }

}