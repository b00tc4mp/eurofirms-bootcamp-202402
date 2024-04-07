import React from 'react'


function App() {
  const columns = 8
  const rows = 8

  const initialBoard = new Array(rows)

  for (let i = 0; i < initialBoard.length; i++) {
    initialBoard[i] = new Array(columns);

    for (let j = 0; j < initialBoard[i].length; j++) {
      const isBomb = Math.floor(Math.random() * 10)

      const cell = {
        isBomb: !isBomb,
        isClicked: false,
      };
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

  //Hacemos esto porque no se puede mutar el array original
  const handleClick = (i, j) => {
    if (gameState === 'loose') return

    const boardCopy = [...board].map(row => [...row])

    const cellCopy = { ...boardCopy[i][j] }

    cellCopy.isClicked = true

    boardCopy[i][j] = cellCopy

    setBoard(boardCopy)

    if (cellCopy.isBomb) {
      setTimeout(() => alert('explotaste'), 0)

      setGameState('loose')
    }
  }

  const handleResetClick = () => {
    const newBoard = new Array(rows)

    for (let i = 0; i < newBoard.length; i++) {
      newBoard[i] = new Array(columns);

      for (let j = 0; j < newBoard[i].length; j++) {
        const isBomb = Math.floor(Math.random() * 10)

        const cell = {
          isBomb: !isBomb,
          isClicked: false,
        };

        newBoard[i][j] = cell
      }
    }
    for (let i = 0; i < newBoard.length; i++) {
      for (let j = 0; j < newBoard[i].length; j++) {
        let bombsAside = 0

        // arriba
        //Si no existe lo que haya después de ? no te va poner la propiedad
        if (newBoard[i]?.[j - 1]?.isBomb) bombsAside++
        // abajo
        if (newBoard[i]?.[j + 1]?.isBomb) bombsAside++
        // izquierda
        if (newBoard[i - 1]?.[j]?.isBomb) bombsAside++
        // derecha
        if (newBoard[i + 1]?.[j]?.isBomb) bombsAside++
        // arriba a la izquierda
        if (newBoard[i - 1]?.[j - 1]?.isBomb) bombsAside++
        // arriba a la derecha
        if (newBoard[i - 1]?.[j + 1]?.isBomb) bombsAside++
        // abajo a la izquierda
        if (newBoard[i + 1]?.[j - 1]?.isBomb) bombsAside++
        // abajo a la derecha
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
        <h1>Hola Buscaminas</h1>
        <hr />
      </header>
      <main className="main">
        <section
          className="board"
          style={{
            gridTemplateColumns: `repeat(${columns}, 1fr)`,
            gridTemplateRows: `repeat(${rows}, 1fr)`
          }}
        >
          {board.map((row, i) => row.map((cell, j) => {
            return cell.isClicked ?
              <div className="clicked-cell">
                {cell.isBomb ? 'Boom' : cell.bombsAside}
              </div> :
              <div className="no-clicked-cell">
                <button onClick={() => handleCellClick(i, j)} className="cell-button"></button>
              </div>
          })).flat()}
        </section>

        {gameState === 'loose' && <button onClick={handleResetClick}>Reset</button>}
      </main>
    </>
  )
}


export default App
