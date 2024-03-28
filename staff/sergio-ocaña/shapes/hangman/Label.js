class Label extends Component {
    constructor() {
        super('label')
    }

    setFor(htmlfor) {
        this.container.htmlFor = htmlfor
    }
}