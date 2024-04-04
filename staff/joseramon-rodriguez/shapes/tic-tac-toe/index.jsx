function App() {
    const boardInit = new Array(3)
    const turnInit = 0

    for (let i = 0; i < boardInit.length; i++)
        boardInit[i] = new Array(boardInit.length).fill(0)

    const [board, setBoard] = React.useState(boardInit)

    const [turn, setTurn] = React.useState(turnInit)


    function getCellChar(value) {
        if (value === 1) return 'X'
        else if (value === 2) return 'O'
        else return ''
    }

    function play(row, column) {
        console.log('click')

        const prevBoard = board

        const newBoard = []
        for (let i = 0; i < prevBoard.length; i++)
            newBoard[i] = new Array(prevBoard[0].length).fill(0)

        for (const i in prevBoard)
            for (const j in prevBoard[i])
                newBoard[i][j] = prevBoard[i][j]

        if (turn % 2 === 0)
            newBoard[row][column] = 1
        else
            newBoard[row][column] = 2

        setBoard(newBoard)
        setTurn(turn + 1)
    }

    return <>
        <header>Tic Tac Toe</header>
        <main>
            <section className="board" style={{
                gridTemplateColumns: `repeat(${board.length}, 1fr)`,
                gridTemplateRows: `repeat(${board.length}, 1fr)`
            }}>
                {board.map((row, i) => row.map((column, j) => <div key={`${i}-${j}`} className="cell" onClick={() => play(i, j)}>{getCellChar(board[i][j])}</div>)).flat(Infinity)}
            </section>
        </main>
        <footer></footer>
    </>
}

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(<App />)