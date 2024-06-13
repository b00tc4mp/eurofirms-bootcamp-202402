class ColorButton extends React.Component {
    constructor() {
        super()
    }

    render() {
        return <button
            className="color-button"
            style={{ backgroundColor: this.props.color, border: this.props.selected ? '5px solid salmon' : '0' }}
            onClick={() => this.props.onClick()}
        />
    }
}