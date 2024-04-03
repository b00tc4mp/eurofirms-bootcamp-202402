class ColorButtons extends React.Component {
    constructor() {
        super()
    }

    render() {
        return <ul className="colors">
            {this.props.colors.map(color => <li key={color}>
                <ColorButton
                    selected={this.props.color === color}
                    color={color}
                    onClick={() => this.props.onColorClick(color)}
                />
            </li>)}
        </ul>
    }
}