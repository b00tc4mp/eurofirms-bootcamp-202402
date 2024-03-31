class App extends React.Component {
    constructor() {
        super()

        const board = new Array(3)

        for (let i = 0; i < board.length; i++)
            board[i] = new Array(board.length).fill(0)

        this.state = {
            board,
            turn: 0
        }
    }

    getCellChar(value) {
        if (value === 1) return 'X'
        else if (value === 2) return 'O'
        else return ''
    }

    sonido() {
        const audio = new Audio("pop.mp3");
        audio.play();
    }

    play(row, column) {
        const prevBoard = this.state.board;

        if (prevBoard[row][column] !== 0) {
            console.log('Celda ocupada');
            return;
        }
    
        const board = [...prevBoard];
        const turn = this.state.turn;
    
        if (turn % 2 === 0) {
            board[row][column] = 1;
        } else {
            board[row][column] = 2;
        }
    
        this.setState({ board, turn: turn + 1 }, this.sonido);
    }


    render() {
        const board = this.state.board

        return <>

            <main>
                <section className="board" style={{
                    gridTemplateColumns: `repeat(${board.length}, 1fr)`,
                    gridTemplateRows: `repeat(${board.length}, 1fr)`
                }}>
                    {board.map((row, i) => row.map((column, j) => <div className="cell" onClick={() => this.play(i, j)}>{this.getCellChar(board[i][j])}</div>)).flat(Infinity)}
                </section>
            </main>
            <footer></footer>
        </>
    }
}

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(<App />)