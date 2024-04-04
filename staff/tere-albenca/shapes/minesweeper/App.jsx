function App(){
    const matrix = new Array(8)
    for (let i = 0;i< matrix.length;i++){

        const cell={
            isBomb:false,
            isClicked:false,
            bombsAside:0,
        }
        matrix[i] = new Array(matrix.length)
    }

    const [board,setBoard]= React.useState(matrix)

    return(
        <>
        <header>
            <h1>Minesweeper</h1>
        </header>
        <main>
            <div className="board" style={{
                gridTemplate: `repeat(${matrix.length}, 1fr)` / `repeat(${matrix.length}, 1fr)`,
            }}>
                {board.map((row, i)=>row.map((cell,j)=> <div onclick=""className={cell.isClicked? 'clicked-cell': 'no-clicked-cell'}>
                
                <div/>)).flat()}
            </div>
        </main>
        <footer>
        <button onClick={resetGame}>New play</button>
        </footer>
    </>
)
}