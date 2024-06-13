function ColorButton(props) {

    function handleClick() {
        props.onClick()
    }
    return <button
        className={`color-button ${props.selected ? 'color-button-selected' : ''}`}
        style={{ backgroundColor: props.color }}
        onClick={() => handleClick()}
    />

}