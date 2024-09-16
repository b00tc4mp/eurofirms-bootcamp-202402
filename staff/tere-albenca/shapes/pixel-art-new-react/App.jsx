function App (){
        const initBoard = new Array(10)

        for (let i = 0; i < initBoard.length; i++)
            initBoard[i] = new Array(initBoard.length).fill('gray')

        const [board, setBoard] = React.useState(initBoard)
        const [color, setColor] = React.useState('black')

    function paint(row, column) {
        const prevBoard = board

        const newBoard = new Array(prevBoard.length)
        for (let i = 0; i < prevBoard.length; i++)
            newBoard[i] = new Array(prevBoard[0].length).fill('gray')

        for (const i in prevBoard)
            for (const j in prevBoard[i])
                newBoard[i][j] = prevBoard[i][j]

        newBoard[row][column] = color;
        
        setBoard(newBoard);
    }


    function resetGame() {
        const prevBoard = board
        
        const newBoard = new Array(prevBoard.length)

        for (let i = 0; i < prevBoard.length; i++)
            newBoard[i] = new Array(prevBoard[0].length).fill('gray')

        setBoard(newBoard);
    }
    console.debug('App render')

    const colors = ['blueviolet','darkred','lightgreen','red','pink','gold','purple','deepskyblue','orange',
        'black','yellow','coral', 'olive', 'whitesmoke','blue', 'dimgray', 'navy', 'orangered','silver' ]

    return <>
        <header><div>PIXEL ART</div></header>
        <main className="main">
            <ColorButtons color={color} colors={colors} onColorClick={color => setColor(color)} />

            <Board board={board} onPixelClick={(row, col) => paint(row, col)} />
        </main>
        <footer>
            <button onClick={() => resetGame()}>NEW PLAY</button>
        </footer>
    </>
}