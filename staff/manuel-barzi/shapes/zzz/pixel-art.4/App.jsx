class App extends React.Component {
    constructor() {
        super()

        const board = new Array(10)

        for (let i = 0; i < board.length; i++)
            board[i] = new Array(board.length).fill('white')

        this.state = {
            board,
            turn: 0,
            color: 'black'
        }
    }

    paint(row, column) {
        const prevBoard = this.state.board

        const newBoard = new Array(prevBoard.length)
        for (let i = 0; i < prevBoard.length; i++)
            newBoard[i] = new Array(prevBoard[0].length).fill('white')

        for (const i in prevBoard)
            for (const j in prevBoard[i])
                newBoard[i][j] = prevBoard[i][j]


        newBoard[row][column] = this.state.color

        this.setState({ board: newBoard })
    }

    clear() {
        const prevBoard = this.state.board

        const newBoard = new Array(prevBoard.length)
        for (let i = 0; i < prevBoard.length; i++)
            newBoard[i] = new Array(prevBoard[0].length).fill('white')

        this.setState({ board: newBoard })
    }

    render() {
        const board = this.state.board

        const colors = ['red', 'green', 'blue', 'yellow', 'white', 'black']

        return <>
            <header>
                <h1>Pixel Art</h1>
            </header>
            <main className="main">
                <ul className="colors">
                    {colors.map(color => <li key={color}>
                        <ColorButton
                            color={color}
                            onClick={() => this.setState({ color })}
                        />
                    </li>)}
                </ul>

                <section className="board" style={{
                    gridTemplateColumns: `repeat(${board.length}, 1fr)`,
                    gridTemplateRows: `repeat(${board.length}, 1fr)`
                }}>
                    {board.map((row, i) => row.map((column, j) => <Pixel
                        key={`${i}-${j}`}
                        color={board[i][j]}
                        onClick={() => this.paint(i, j)}
                    />)).flat(Infinity)}
                </section>

                <button onClick={() => this.clear()}>reset</button>
            </main>
            <footer></footer>
        </>
    }
}