function Pixel(props) {

    function handleClick() {
        props.onClick()
    }
    return <div
        className="pixel"
        style={{ backgroundColor: props.color }}
        onClick={() => handleClick()}>
    </div>
}