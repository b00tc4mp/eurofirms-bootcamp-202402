function ColorButton(props) {
    function handleClick() {
        props.onClick()
    }

    return <button
        className={`${props.selected ? 'color-button--selected' : 'color-button'}`}
        style={{ backgroundColor: props.color }
        }
        onClick={() => handleClick()}
    />

}