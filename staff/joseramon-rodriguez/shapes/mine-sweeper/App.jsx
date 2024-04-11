function App() {
    const matrix = new Array(8)

    for (let i = 0; i < matrix.length; i++) {
        const cell = {
            isBomb: false,
            isClicked: false,
            bombAside: 0,
        }

        matrix[i] = new Array(8).fill(cell)
    }

    const [board, setBoard] = React.useState(matrix)

    return <>
        <header>Mine Sweeper</header>
        <main>
            <div className="board" style={{
                gridTemplate: `repeat(${matrix.length},1fr) / repeat(${matrix.length},1fr) `
            }}
            >
                {board.map((row, i) => row.map((cell, j) => <div key={`${i}-${j}`} className={cell.isClicked ? 'clicked-cell' : 'no-clicked-cell'}>
                    <button className="cell-button" onClick={() => handleCellClick(i, j)}></button>
                </div>
                )).flat(Infinity)}
            </div>

        </main>
        <footer></footer>
    </>

}