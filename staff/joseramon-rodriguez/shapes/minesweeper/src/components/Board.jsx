import { useState } from "react";
import { generateBoard } from "../logic/generateBoard";
import { clearCells } from "../logic/clearCells";
import Cell from "./Cell"



const dificultLevels = [
    { columns: 8, rows: 8, bombs: 10 },
    { columns: 12, rows: 12, bombs: 25 },
    { columns: 15, rows: 15, bombs: 35 }
]
const initialBoard = generateBoard(dificultLevels[0].columns, dificultLevels[0].rows, dificultLevels[0].bombs)

function Board() {
    const [board, setBoard] = useState(initialBoard)
    const [isGameFinished, setGameFinished] = useState(null)
    const [isFlagClicked, setIsFlagClicked] = useState(false)
    const [markedBombs, setMarkedBombs] = useState(0)
    const [dificult, setDificult] = useState(0)

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

        if (boardCopy[i][j].bombsAside === 0 && !isFlagClicked)
            clearCells(boardCopy, i, j)

        boardCopy[i][j] = cellCopy

        setBoard(boardCopy)

        if (cellCopy.isBomb && cellCopy.isRevealed) {
            setTimeout(() => alert('explotaste'), 20)

            setGameFinished(true)
        }
    }

    const handleResetClick = () => {
        const newBoard = generateBoard(dificultLevels[dificult].columns, dificultLevels[dificult].rows, dificultLevels[dificult].bombs)

        setBoard(newBoard)
        setGameFinished(null)
        setMarkedBombs(0)
    }

    const finishGameHandler = () => {
        const isGameWinned = !board.some(row => row.some(cell => cell.isBomb && !cell.isMarked))

        if (isGameWinned) {
            setGameFinished(true)

            alert('ganaste!')
        }
        else {
            setGameFinished(true)

            alert('perdiste!')
        }
    }

    const handleDificultClick = (level) => {
        setDificult(level)

        const newBoard = generateBoard(dificultLevels[level].columns, dificultLevels[level].rows, dificultLevels[level].bombs)

        setBoard(newBoard)
        setGameFinished(false)
        setMarkedBombs(0)
    }

    return (
        <div>
            <div>
                Choose dificulty
                <button onClick={() => handleDificultClick(0)} >Easy</button>
                <button onClick={() => handleDificultClick(1)}>Medium</button>
                <button onClick={() => handleDificultClick(2)}>Hard</button>
            </div>
            <div className="board-buttons">
                <button className={`select-marker-button ${isFlagClicked && 'selected-button'}`} onClick={() => setIsFlagClicked(true)}>🚩</button>
                <button className={`select-marker-button ${!isFlagClicked && 'selected-button'}`} onClick={() => setIsFlagClicked(false)}>🔍</button>
                <span>Bombs revealed: {markedBombs} / {dificultLevels[dificult].bombs}</span>
                <button disabled={markedBombs !== dificultLevels[dificult].bombs || isGameFinished} onClick={finishGameHandler}>Finish game</button>
            </div>
            <section
                className={`board ${isFlagClicked && 'flag-cursor'}`}
                style={{
                    gridTemplateColumns: `repeat(${dificultLevels[dificult].columns},1fr)`,
                    gridTemplateRows: `repeat(${dificultLevels[dificult].rows},1fr)`,
                    width: 30 * dificultLevels[dificult].columns + 'px',
                    height: 30 * dificultLevels[dificult].rows + 'px'
                }}
            >
                {board.map((row, i) => row.map((cell, j) => (
                    <Cell
                        isGameFinished={isGameFinished}
                        isFlagClicked={isFlagClicked}
                        onCellClick={handleCellClick}
                        coords={{ i, j }}
                        key={`${i}-${j}`}
                        cell={cell}
                    />)
                )).flat()}
            </section>
            {<button onClick={handleResetClick}>Reset</button>}
        </div>
    )
}

export default Board