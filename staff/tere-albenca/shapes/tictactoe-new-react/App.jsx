function App() {
    const initBoard = Array.from({ length: 4 }, () => Array.from({ length: 4 }, () => 0));
    const [board,setBoard]= React.useState(initBoard)
    const [turn,setTurn] = React.useState('0')
    const [winner,setWinner]= React.useState(null)

    function getCellChar(value) {
        if (value === 1) return 'X'
        else if (value === 2) return 'O'
        else return ''
    }
    
    function play(row, column) {
        if (winner || board[row][column]) return;

        const newBoard = board.map((row) => [...row]);
        const newTurn = parseInt(turn) + 1;
        const nextPlayer = newTurn % 2 === 0 ? 2 : 1;
        newBoard[row][column] = nextPlayer;
        setBoard(newBoard);
        setTurn(newTurn);

        const winner = verifyWin(newBoard);
        if (winner) setWinner(winner);
    }
    //con este metedo se pueden ver todas las opciones ganadoras
    //para cotejarlas con el tablero
    function verifyWin(board) {
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
    function resetGame() {
        setBoard(initBoard);
        setTurn('0');
        setWinner(null);
    }
    
        return <>
            <header><div>TIC TAC TOE</div></header>
            <main>
                <Board board= {board} onClick={play} getCellChar={getCellChar}></Board>
            </main>
            <footer>
                {winner ? <div>El ganador es: {winner}</div> :null}
                <button onClick={resetGame}>New play</button>
            </footer>
        </>
}
