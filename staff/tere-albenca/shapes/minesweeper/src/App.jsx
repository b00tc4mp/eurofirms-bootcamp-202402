import React from "react";

function App() {
  const columns = 10;
  const rows = 10;

  const matrix = new Array(rows);

  for (let i = 0; i < matrix.length; i++) {
    matrix[i] = new Array(columns);

    for (let j = 0; j < matrix.length; j++) {
      const isBomb = Math.floor(Math.random() * 8);

      const cell = {
        isBomb: !isBomb,
        isClicked: false,
      };

      matrix[i][j] = cell;
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      let bombsAside = 0;

      if (matrix[i]?.[j - 1]?.isBomb) bombsAside++;
      if (matrix[i]?.[j + 1]?.isBomb) bombsAside++;
      if (matrix[i - 1]?.[j]?.isBomb) bombsAside++;
      if (matrix[i + 1]?.[j]?.isBomb) bombsAside++;
      if (matrix[i - 1]?.[j - 1]?.isBomb) bombsAside++;
      if (matrix[i - 1]?.[j + 1]?.isBomb) bombsAside++;
      if (matrix[i + 1]?.[j - 1]?.isBomb) bombsAside++;
      if (matrix[i + 1]?.[j + 1]?.isBomb) bombsAside++;

      matrix[i][j].bombsAside = bombsAside;
    }
  }

  const [board, setBoard] = React.useState(matrix);
  const [gameState, setGameState] = React.useState(null);

  const handleCellClick = (i, j) => {
    if (gameState === "loose" || gameState === "win") return;

    const boardCopy = [...board].map((row) => [...row]);

    const cellCopy = { ...boardCopy[i][j] };

    cellCopy.isClicked = true;
    boardCopy[i][j] = cellCopy;
    setBoard(boardCopy);

    if (cellCopy.isBomb) {
      setTimeout(() => alert("explotaste"), 0);

      setGameState("loose");
      // }else{
      //   const nonBombCellsLeft = boardCopy.flat().filter(cell => !cell.isBomb && !cell.isClicked).length;

      //   if (nonBombCellsLeft === 0) {
      //     setTimeout(() => alert('¡Ganaste!'), 0);
      //     setGameState('win');
      //   }
    }
  };
  const handleResetClick = () => {
    const newBoard = new Array(rows);

    for (let i = 0; i < newBoard.length; i++) {
      newBoard[i] = new Array(columns);

      for (let j = 0; j < newBoard[i].length; j++) {
        const isBomb = Math.floor(Math.random() * 8);

        const cell = {
          isBomb: !isBomb,
          isClicked: false,
        };

        newBoard[i][j] = cell;
      }
    }
    for (let i = 0; i < newBoard.length; i++) {
      for (let j = 0; j < newBoard[i].length; j++) {
        let bombsAside = 0;

        // arriba
        //Si no existe lo que haya después de ? no te va poner la propiedad
        if (newBoard[i]?.[j - 1]?.isBomb) bombsAside++;
        // abajo
        if (newBoard[i]?.[j + 1]?.isBomb) bombsAside++;
        // izquierda
        if (newBoard[i - 1]?.[j]?.isBomb) bombsAside++;
        // derecha
        if (newBoard[i + 1]?.[j]?.isBomb) bombsAside++;
        // arriba a la izquierda
        if (newBoard[i - 1]?.[j - 1]?.isBomb) bombsAside++;
        // arriba a la derecha
        if (newBoard[i - 1]?.[j + 1]?.isBomb) bombsAside++;
        // abajo a la izquierda
        if (newBoard[i + 1]?.[j - 1]?.isBomb) bombsAside++;
        // abajo a la derecha
        if (newBoard[i + 1]?.[j + 1]?.isBomb) bombsAside++;

        newBoard[i][j].bombsAside = bombsAside;
      }
    }
    setBoard(newBoard);
    setGameState(null);
  };

  return (
    <>
      <body>
        <header>
          <h1>MINESWEEPER</h1>
        </header>
        <main className="main"></main>
        <footer>
          {gameState === "loose" && (
            <button onClick={handleResetClick}>Reset</button>
          )}
        </footer>
      </body>
    </>
  );
}

export default App;
