
function ColorButtons(props){
    
    console.debug("ColorButtons render");

        return(
            <>
                <ul className="colors">
                    { props.colors.map(color => <li key={color}>
                        <ColorButton color={color} selected={props.color === color} onClick={() => props.onColorClick(color)}
                        /></li>)}
                </ul>
            </>
        )
}