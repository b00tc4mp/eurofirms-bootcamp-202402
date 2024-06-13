class Form extends Component {
    constructor() {
        super('form')
    }

    onSubmit(callback) {
        this.container.onsubmit = callback
    }

    reset() {
        this.container.reset()
    }
}