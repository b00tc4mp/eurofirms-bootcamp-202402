class Label extends Component {
    constructor() {
        super('label')
    }


    setFor(htmlFor) {
        this.CSSContainerRule.htmlFor = htmlFor
    }
}