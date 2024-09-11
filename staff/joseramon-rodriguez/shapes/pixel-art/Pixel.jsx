function Pixel(props) {
    return <div
        className="pixel"
        style={{ backgroundColor: props.color }}
        onClick={() => props.onClick()}>
    </div>

}