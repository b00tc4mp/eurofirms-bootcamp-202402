class ColorButton extends React.Component {
    constructor() {
        super()
    }


    render() {
        return <button
            className="color-button"
            style={{ backgroundColor: this.props.color }}
            onClick={() => this.props.onClick()}
        />
    }
}