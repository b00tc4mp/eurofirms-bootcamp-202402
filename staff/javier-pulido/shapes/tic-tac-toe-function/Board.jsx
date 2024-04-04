function Board(props) {
    const board = props.board

   return < section className="board" style={{
    
        gridTemplateColumns: `repeat(${board.length}, 1fr)`,
        gridTemplateRows: `repeat(${board.length}, 1fr)`
    }}>
        {board.map((row, i) => row.map((column, j) => <div className="cell" onClick={() => props.onClick(i, j)}>{props.getCellChar(column)}</div>)).flat(Infinity)}
    </section >
}