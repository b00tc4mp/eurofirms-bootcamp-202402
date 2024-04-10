function App(){
   

        const initBoard = new Array(4)

        for (let i = 0; i < initBoard.length; i++)
            initBoard[i] = new Array(initBoard.length).fill(0)
        const [board, setBoard] = React.useState(initBoard)
        const [turn, setTurn] = React.useState(0)

    function getCellChar(value) {
        if (value === 1) return 'X'
        else if (value === 2) return 'O'
        else return ''
    }

    function play(row, column) {
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

        this.setState({ board, turn: turn + 1 })
    }


    render() {
        const board = this.state.board

        return <>
            <header>Tic Tac Toe</header>
            <main>
                
            </main>
            <footer></footer>
        </>
    }
}