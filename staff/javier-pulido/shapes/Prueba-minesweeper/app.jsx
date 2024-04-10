import React from "react"

function App() {
    const columns = 8
    const rows = 8

    const initialBoard = new Array(rows)

    for (let i = 0; i < initialBoard.length; i++) {
        initialBoard[i] = new Array(columns)

        for (let j = 0; j < initialBoard[i].length; j++)
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

        if (initialBoard[i]?.[j - 1]?.isBomb) bombAside++
        if (initialBoard[i]?.[j + 1]?.isBomb) bombAside++
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

//Hacemos esto por que no se puede mutar el array original
const handleCellClick = (i, j) => {
    if (gameState === 'loose') return

    const boardCopy = [...board].map(row => [...row])

    const cellCopy = {...boardcopy[i][j]}

    cellCopy.isClicked = true

    boardCopy[i][j] = cellCopy

    setBoard(boardCopy)

    if (cellCopy.isBomb) {
        setTimeout(() => alert('explotaste'), 0)

        setGameState('loose')    
    }  
}


}







export default App