function Pixel(props) {
    function handleClick() {
        console.debug('Pixel handleClick')

        props.onClick()
    }

    console.debug('Pixel render')


    return <div
        className="pixel"
        style={{ backgroundColor: props.color }}
        onClick={() => handleClick()}>
    </div >
}