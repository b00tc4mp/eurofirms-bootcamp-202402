import './App.css'
import React from 'react'

function App() {
  const columns = 8
  const rows = 8

  const initialBoard = new Array(rows)

  for (let i = 0; i < initialBoard.length; i++) {
    initialBoard[i] = new Array(columns)
    for (let j = 0; j < initialBoard[i].length; j++) {
      const isBomb = Math.floor(Math.random() * 10)

      const cell = {
        isBomb: !isBomb,
        isClicked: false,
      }

      initialBoard[i][j] = cell
    }
  }

  for (let i = 0; i < initialBoard.length; i++) {
    for (let j = 0; j < initialBoard[i].length; j++) {
      let bombsAside = 0

      if (initialBoard[i]?.[j - 1]?.isBomb) bombsAside++
      if (initialBoard[i]?.[j + 1]?.isBomb) bombsAside++
      if (initialBoard[i - 1]?.[j]?.isBomb) bombsAside++
      if (initialBoard[i + 1]?.[j]?.isBomb) bombsAside++
      if (initialBoard[i - 1]?.[j - 1]?.isBomb) bombsAside++
      if (initialBoard[i - 1]?.[j + 1]?.isBomb) bombsAside++
      if (initialBoard[i + 1]?.[j - 1]?.isBomb) bombsAside++
      if (initialBoard[i + 1]?.[j + 1]?.isBomb) bombsAside++

      initialBoard[i][j].bombsAside = bombsAside
    }
  }

  const [board, setBoard] = React.useState(initialBoard)
  const [gameState, setGameState] = React.useState(null)

  function handleCellClick(i, j) {
    if (gameState === 'lose') return
    const boardCopy = [...board].map(row => [...row])

    const cellCopy = { ...boardCopy[i][j] }

    cellCopy.isClicked = true

    boardCopy[i][j] = cellCopy

    setBoard(boardCopy)

    if (cellCopy.isBomb) {
      setTimeout(() => alert('explosion!'))

      setGameState('lose')
    }
  }

  const handleResetClick = () => {
    const newBoard = new Array(rows)

    for (let i = 0; i < newBoard.length; i++) {
      newBoard[i] = new Array(columns)

      for (let j = 0; j < newBoard[i].length; j++) {
        const isBomb = Math.floor(Math.random() * 10)

        const cell = {
          isBomb: !isBomb,
          isClicked: false
        }

        newBoard[i][j] = cell
      }
    }

    for (let i = 0; i < newBoard.length; i++) {
      for (let j = 0; j < newBoard[i].length; j++) {
        let bombsAside = 0

        if (newBoard[i]?.[j - 1]?.isBomb) bombsAside++
        if (newBoard[i]?.[j + 1]?.isBomb) bombsAside++
        if (newBoard[i - 1]?.[j]?.isBomb) bombsAside++
        if (newBoard[i + 1]?.[j]?.isBomb) bombsAside++
        if (newBoard[i - 1]?.[j - 1]?.isBomb) bombsAside++
        if (newBoard[i - 1]?.[j + 1]?.isBomb) bombsAside++
        if (newBoard[i + 1]?.[j - 1]?.isBomb) bombsAside++
        if (newBoard[i + 1]?.[j + 1]?.isBomb) bombsAside++

        newBoard[i][j].bombsAside = bombsAside
      }
    }
    setBoard(newBoard)
    setGameState(null)
  }

  return (
    <>
      <header>
        <h1>Hello mine sweeper</h1>
      </header>
      <main>
        <section className='board'
          style={{
            gridTemplateColumns: `repeat(${columns},1fr)`,
            gridTemplateRows: `repeat(${rows},1fr)`
          }}
        >
          {board.map((row, i) => row.map((cell, j) => {
            return cell.isClicked ? <div key={`${i}-${j}`} className='cell'>
              {cell.isBomb ? 'boom' : cell.bombsAside}
            </div> : <div key={`${i}-${j}`} className='cell'>
              <button onClick={() => handleCellClick(i, j)} className='cell-button'></button>
            </div>
          })).flat()}
        </section>

        {gameState === 'lose' && <button onClick={handleResetClick}>Reset</button>}
      </main>
      <footer></footer>
    </>
  )
}

export default App
