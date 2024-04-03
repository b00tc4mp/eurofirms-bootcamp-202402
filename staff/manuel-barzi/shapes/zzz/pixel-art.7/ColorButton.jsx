class ColorButton extends React.Component {
    constructor() {
        console.debug('ColorButton constructor')

        super()
    }

    handleClick() {
        console.debug('ColorButton handleClick')

        this.props.onClick()
    }

    render() {
        console.debug('ColorButton render')

        return <button
            className={`color-button ${this.props.selected ? 'color-button-selected' : ''}`}
            style={{ backgroundColor: this.props.color }}
            onClick={() => this.handleClick()}
        />
    }
}