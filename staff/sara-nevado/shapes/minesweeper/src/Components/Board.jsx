import { useState } from "react"


import { generateBoard } from "../logic/generateBoard"
import { clearCells } from "../logic/clearCells"
import Cell from "./Cell"

const difficultLevels = [
    { columns: 8, rows: 8, bombs: 10 },
    { columns: 12, rows: 12, bombs: 25 },
    { columns: 15, rows: 15, bombs: 35 },
]

const initialBoard = generateBoard(difficultLevels[0].columns, difficultLevels[0].rows, difficultLevels[0].bombs)

function Board() {
    const [board, setBoard] = useState(initialBoard)
    const [isGameFinished, setGameFinished] = useState(null)
    const [isFlagClicked, setIsFlagClicked] = useState(false)
    const [markedBombs, setMarkedBombs] = useState(0)
    const [difficult, setDifficult] = useState(0)


    const handleCellClick = (i, j) => {
        if (isGameFinished) return

        const boardCopy = [...board].map(row => [...row])

        const cellCopy = { ...boardCopy[i][j] }

        if (isFlagClicked) {
            setMarkedBombs(markedBombs + 1)

            cellCopy.isMarked = true
        }

        else if (cellCopy.isMarked) {
            cellCopy.isMarked = false

            setMarkedBombs(markedBombs - 1)
        }

        else cellCopy.isRevealed = true

        if (boardCopy[i][j].bombsAside === 0 && !isFlagClicked) {
            clearCells(boardCopy, i, j)
        }

        boardCopy[i][j] = cellCopy

        setBoard(boardCopy)

        if (cellCopy.isBomb && cellCopy.isRevealed) {
            setTimeout(() => alert('explotaste'), 20)

            setGameFinished(true)
        }
    }

    const handleResetClick = () => {
        const newBoard = generateBoard(difficultLevels[difficult].columns, difficultLevels[difficult].rows, difficultLevels[difficult].bombs)

        setBoard(newBoard)
        setGameFinished(null)
        setMarkedBombs(0)
    }

    const finishGameHandler = () => {
        const isGameWinned = !board.some(row => row.some(cell => cell.isBomb && !cell.isMarked))

        if (isGameWinned) {
            setGameFinished(true)

            alert('Ganaste!')
        }
        else {
            setGameFinished(true)

            alert('Perdiste')
        }
    }

    const handleDificultClick = (level) => {
        setDificult(level)

        const newBoard = generateBoard(difficultLevels[level].columns, difficultLevels[level].rows, difficultLevels[level].bombs)

        setBoard(newBoard)
        setGameFinished(false)
        setMarkedBombs(0)
    }


    return (
        <div>
            <div>
                Choose dificult
                <button onClick={() => handleDifficultClick(0)}>Easy</button>
                <button onClick={() => handleDifficultClick(1)}>Medium</button>
                <button onClick={() => handleDifficultClick(2)}>Hard</button>
            </div>
            <div className="board-buttons">
                <button className={`select-marker-button ${isFlagClicked && 'selected-button'}`} onClick={() => setIsFlagClicked(true)}>🚩</button>
                <button className={`select-marker-button ${!isFlagClicked && 'selected-button'}`} onClick={() => setIsFlagClicked(false)}>🔍</button>
                <span>Bombs revealed: {markedBombs} / {difficultLevels[difficult].bombs}</span>
                <button disabled={markedBombs !== difficultLevels[difficult].bombs || isGameFinished} onClick={finishGameHandler}>Finish Game</button>
            </div>


            <section
                className={`board ${isFlagClicked && 'flag-cursor'}`}
                style={{
                    gridTemplateColumns: `repeat(${difficultLevels[difficult].columns}, 1fr)`,
                    gridTemplateRows: `repeat(${difficultLevels[difficult].rows}, 1fr)`,
                    width: 30 * difficultLevels[difficult].columns + 'px',
                    height: 30 * difficultLevels[difficult].rows + 'px'
                }}
            >
                {board.map((row, i) => row.map((cell, j) => (
                    <Cell
                        isGameFinished={isGameFinished}
                        isFlagClicked={isFlagClicked}
                        onCellClick={handleCellClick}
                        coords={{ i, j }}
                        key={`${i}-${j}`}
                        cell={cell} />)
                )).flat()}
            </section>
            <button onClick={handleResetClick}>Reset</button>
        </div>
    )
}

export default Board