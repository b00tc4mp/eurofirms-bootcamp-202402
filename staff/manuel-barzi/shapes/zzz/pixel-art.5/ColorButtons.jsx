class ColorButtons extends React.Component {
    constructor() {
        super()
    }

    render() {
        return <ul className="colors">
            {this.props.colors.map(color => <li key={color}>
                <ColorButton
                    color={color}
                    onClick={() => this.props.onColorClick(color)}
                />
            </li>)}
        </ul>
    }
}