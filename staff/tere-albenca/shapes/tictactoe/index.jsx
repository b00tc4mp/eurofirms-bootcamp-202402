class App extends React.Component {
    //creamos el tablero y lo inciamos, 
    constructor() {
        super()

        const board = new Array(4)

        for (let i = 0; i < board.length; i++)
            board[i] = new Array(4).fill(0)

        this.state = {
            board,
            turn: 0,
            //estado ganador
            winner:null
        }

        this.resetGame = this.resetGame.bind(this);
    }
    //para pintar x o 0
    getCellChar(value) {
        if (value === 1) return 'X'
        else if (value === 2) return 'O'
        else return ''
    }
    //el play verifica si hay ganador, pinta el turno que se ha hecho 
    //y vuelve a verificar si hay ganador
    play(row, column) {
        if (this.state.winner) return;

        console.log('click')
        const prevBoard = this.state.board

        const board = []
        for (let i = 0; i < prevBoard.length; i++)
            board[i] = new Array(prevBoard[0].length).fill(0)

        for (const i in prevBoard)
            for (const j in prevBoard[i])
                board[i][j] = prevBoard[i][j]

        const turn = this.state.turn

        if (turn % 2 === 0)
            board[row][column] = 1
        else
            board[row][column] = 2

        this.setState({ board, turn: turn + 1 },()=> {
            const winner = this.verifyWin(board);
            if(winner) this.setState({ winner });
        })
    }
    //con este metedo se pueden ver todas las opciones ganadoras
    //para cotejarlas con el tablero
    verifyWin(board){
        const winningPatterns = [
            // filas
            [board[0][1], board[0][2], board[0][3]],
            [board[0][0], board[0][1], board[0][2]],
            [board[1][0], board[1][1], board[1][2]],
            [board[1][1], board[1][2], board[1][3]],
            [board[2][0], board[2][1], board[2][2]],
            [board[2][1], board[2][2], board[2][3]],
            [board[3][0], board[3][1], board[3][2]],
            [board[3][1], board[3][2], board[3][3]],
            // Columnas
            [board[0][0], board[1][0], board[2][0]],
            [board[1][0], board[2][0], board[3][0]],
            [board[0][1], board[1][1], board[2][1]],
            [board[1][1], board[2][1], board[3][1]],
            [board[0][2], board[1][2], board[2][2]],
            [board[1][2], board[2][2], board[3][2]],
            [board[0][3], board[1][3], board[2][3]],
            [board[1][3], board[2][3], board[3][3]],
            // Diagonales
            [board[0][0], board[1][1], board[2][2]],
            [board[1][1], board[2][2], board[3][3]],
            [board[0][1], board[1][2], board[2][3]],
            [board[1][0], board[2][1], board[3][2]],
            [board[0][3], board[1][2], board[2][1]],
            [board[1][2], board[2][1], board[3][0]],
            [board[0][2], board[1][1], board[2][0]],
            [board[1][3], board[2][2], board[3][1]],
        ];
    
        for (const pattern of winningPatterns) {
            if (pattern.every(cell => cell === 1)) {
                return 'X'; // Jugador 1 
            } else if (pattern.every(cell => cell === 2)) {
                return 'O'; // Jugador 2 
            }
        }
        // No hay ganador
        return null; 
    }
    //nuevo juego, resetear tablero
    resetGame() {
        const board = new Array(4).fill(null).map(() => new Array(4).fill(0));
        this.setState({
            board,
            turn: 0,
            winner: null
        });
    }
    //renderizar la interfaz del juego
    render() {
        const board = this.state.board
        const winner = this.state.winner;

        return <>
            <header><div>TIC TAC TOE</div></header>
            <main>
                <section className = "board" style={{
                    gridTemplateColumns: `repeat(${board.length}, 1fr)`,
                    gridTemplateRows: `repeat(${board.length}, 1fr)`
                }}>
                    {board.map((row, i) => row.map((column, j) => <div className="cell" onClick={() => this.play(i, j)}>{this.getCellChar(board[i][j])}</div>)).flat(Infinity)}
                </section>
            </main>
            <footer>
                {winner && <div>El ganador es: {winner}</div>}
                <button onClick={this.resetGame}>New play</button>
            </footer>
        </>
    }
}

//renderizar dom y app
const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(<App />)