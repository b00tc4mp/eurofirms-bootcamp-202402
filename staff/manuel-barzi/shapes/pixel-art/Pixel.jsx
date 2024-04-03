class Pixel extends React.Component {
    constructor() {
        console.debug('Pixel constructor')

        super()
    }

    handleClick() {
        console.debug('Pixel handleClick')

        this.props.onClick()
    }

    render() {
        console.debug('Pixel render')

        return <div
            className="pixel"
            style={{ backgroundColor: this.props.color }}
            onClick={() => this.handleClick()}>
        </div >
    }
}