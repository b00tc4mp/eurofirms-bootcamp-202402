function Cell(props){
    const { cell, coords, onCellClick } = props

    if(cell.isClicked){
        return (
        <div className="clicked-cell">
            {cell.isBomb ? 'Boom' : cell.bombsAside}
        </div>
    )}

    else {
        return ( 
        <div className="no-clicked-cell">
            <button  onClick={()=>onCellClick(coords.i, coords.j)} className="cell-button" />
        </div>
        )}
}

export default Cell