function Board (props) {
    console.debug('Board render')

    return <section className="board" style={{
        gridTemplateColumns: `repeat(${props.board.length}, 1fr)`,
        gridTemplateRows: `repeat(${props.board.length}, 1fr)`
    }
    }>
        {
            props.board.map((row, i) => row.map((column, j) =>
                <Pixel  
                    key={`${i}-${j}`}  
                    color={props.board[i][j]}
                    onClick={() => props.onPixelClick(i, j)} 
            />)).flat(Infinity)
            }
        </section>
    //}
}