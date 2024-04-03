function ColorButtons(props) {

    return <ul className="colors">
        {props.colors.map(color => <li key={color}>
            <ColorButton
                selected={props.color === color}
                color={color}
                onClick={() => props.onColorClick(color)}
            />
        </li>)}
    </ul>
}