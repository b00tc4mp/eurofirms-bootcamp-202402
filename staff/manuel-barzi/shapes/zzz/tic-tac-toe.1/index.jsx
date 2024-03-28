class App extends React.Component {
    constructor() {
        super()

        this.state = {
            board: [
                [0, 0, 0],
                [0, 0, 0],
                [0, 0, 0]
            ],
            turn: 0
        }
    }

    getCellChar(value) {
        if (value === 1) return 'X'
        else if (value === 2) return 'O'
        else return ''
    }

    play(row, column) {
        console.log('click')

        const board = [[], [], []]
        const prevBoard = this.state.board

        board[0][0] = prevBoard[0][0]
        board[0][1] = prevBoard[0][1]
        board[0][2] = prevBoard[0][2]

        board[1][0] = prevBoard[1][0]
        board[1][1] = prevBoard[1][1]
        board[1][2] = prevBoard[1][2]

        board[2][0] = prevBoard[2][0]
        board[2][1] = prevBoard[2][1]
        board[2][2] = prevBoard[2][2]

        const turn = this.state.turn

        if (turn % 2 === 0)
            board[row][column] = 1
        else
            board[row][column] = 2

        this.setState({ board: board, turn: turn + 1 })
    }


    render() {
        const board = this.state.board

        return <>
            <header>Tic Tac Toe</header>
            <main>
                <section className="board">
                    <div className="cell" onClick={() => this.play(0, 0)}>{this.getCellChar(board[0][0])}</div>
                    <div className="cell" onClick={() => this.play(0, 1)}>{this.getCellChar(board[0][1])}</div>
                    <div className="cell" onClick={() => this.play(0, 2)}>{this.getCellChar(board[0][2])}</div>

                    <div className="cell" onClick={() => this.play(1, 0)}>{this.getCellChar(board[1][0])}</div>
                    <div className="cell" onClick={() => this.play(1, 1)}>{this.getCellChar(board[1][1])}</div>
                    <div className="cell" onClick={() => this.play(1, 2)}>{this.getCellChar(board[1][2])}</div>

                    <div className="cell" onClick={() => this.play(2, 0)}>{this.getCellChar(board[2][0])}</div>
                    <div className="cell" onClick={() => this.play(2, 1)}>{this.getCellChar(board[2][1])}</div>
                    <div className="cell" onClick={() => this.play(2, 2)}>{this.getCellChar(board[2][2])}</div>
                </section>
            </main>
            <footer></footer>
        </>
    }
}

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(<App />)