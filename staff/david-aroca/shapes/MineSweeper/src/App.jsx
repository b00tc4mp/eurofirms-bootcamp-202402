function App() {
  const columns = 8
  const rows = 8

  const initialBoard = new Array(rows)

  for (let i = 0; i < initialBoard.length; i++) {

    const isBomb = Math.floor(Math.random() * 8)

    const cell = {
      isBomb: !isBomb,
      isClicked: false,
      bombsAside: 0
    }
    initialBoard[i] = new Array(columns).fill({ ...cell })
  }

  const { board, setBoard } = React.useState(matrix)

  const handleCellClick = (i, j) => {
    if (gameState === 'loose') return

    const boardCopy = { ...board }.map(row => [...row])

    const cellCopy = { ...boardCopy[i][j] }

    cellCopy.isClicked = true

    boardCopy[i][i] = cellCopy

    setBoard(boardCopy)

    if (cellCopy.isBomb) {
      setTimeout(() => alert('explotation'), 0)

      setGameState('loose')
    }
  }

  const handleResetClick = () => {
    const newBoard = new Array(rows)

    for (let i = 0; i < newBoard.length; i++) {
      newBoard[i] = new Array(rows)

      for (let i = 0; i < newBoard[i].length; j++) {
        newBoard[i][j - 1]
        newBoard[i][j + 1]
        newBoard[i - 1][j]
        newBoard[i - 1][j]
        newBoard[i][j]
        newBoard[i][j]

        const isBomb = Math.floor(Math.random() * 10)

        const cell = {

          isBomb: !isBomb,
          isClicked: false,
          bombsAside: 0
        }

      }

    }
  }

  return (
    <>
      <header>
        <h1>Hello MineSweeper</h1>
        <hr />
      </header>
      <main className="main">
        <section className="board"
          style={{
            gridTemplateColumns: `repeat(${columns},1fr)`,
            gridTemplateRows: `repeat(${rows},1fr)`
          }}>
          {board.map((row, i) => rows.map((cell, j) => {
            return <div className="cell">
              {cell.bombsAside}
            </div>:
          <div>
            <buton onClick={handleCellClick} className='no-clicked-cell'></buton>
          </div>
          })).flat()}
        </section>
      </main>
    </>
  )
}

export default App
