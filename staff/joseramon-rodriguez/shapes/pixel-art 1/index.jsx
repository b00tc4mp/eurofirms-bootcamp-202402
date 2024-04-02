class App extends React.Component {
    constructor() {
        super()

        const board = new Array(10)

        const color = ''

        for (let i = 0; i < board.length; i++)
            board[i] = new Array(board.length).fill(0)

        this.state = {
            board,
            color
        }
    }

    paint(row, column, color) {
        console.log('click')
        const prevBoard = this.state.board

        const board = []
        for (let i = 0; i < prevBoard.length; i++)
            board[i] = new Array(prevBoard[0].length).fill(0)

        for (const i in prevBoard)
            for (const j in prevBoard[i])
                board[i][j] = prevBoard[i][j]

        board[row][column] = color

        this.setState({ board: board })
    }

    setColor(color) {
        this.setState({ color: color })
        console.log('color = ' + color)
    }
    reset() {
        const board = new Array(10)

        for (let i = 0; i < board.length; i++)
            board[i] = new Array(board.length).fill(0)

        this.setState({ board: board })
    }


    render() {
        const board = this.state.board
        const colors = ['red', 'green', 'blue']

        return <>
            <header>Pixel Art</header>
            <main className="main">
                <section className="board" style={{
                    gridTemplateColumns: `repeat(${board.length}, 1fr)`,
                    gridTemplateRows: `repeat(${board.length}, 1fr)`
                }}>
                    {board.map((row, i) => row.map((column, j) => <div key={`${i} - ${j}`} className="cell" onClick={() => this.paint(i, j, this.state.color)} style={{ backgroundColor: `${column === 0 ? '' : column}` }}></div>))}
                </section>
                <div>
                    {colors.map(color => <button key={color} className="button" onClick={() => this.setColor(color)}>{color}</button>)}
                    {/* <button className="button" onClick={() => this.setColor('red')}>Red</button>
                    <button className="button" onClick={() => this.setColor('blue')}>Blue</button>
                    <button className="button" onClick={() => this.setColor('green')}>Green</button> */}
                </div>
                <span>Color in use</span>
                <div className="color-preview" style={{ backgroundColor: `${this.state.color}` }}></div>
                <button className="button" onClick={() => this.reset()}>Reset</button>
            </main >
            <footer></footer>
        </>
    }
}

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(<App />)