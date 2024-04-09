import { useState } from "react"
import generateBoard from "../logic/generateBoard"
import Cell from "./Cell"

const columns = 8
const rows = 8
const bombs = 10

const initialBoard = generateBoard(columns, rows, bombs)

function Board() {

    const [board, setBoard] = useState(initialBoard)
    const [gameState, setGameState] = useState(null)

    const handleCellClick = (i, j) => {
        if (gameState === 'loose') return

        const boardCopy = [...board].map(row => [...row])

        const cellCopy = { ...boardCopy[i][j] }

        cellCopy.isClicked = true

        boardCopy[i][j] = cellCopy

        setBoard(boardCopy)

        if (cellCopy.isBomb) {
            setTimeout(() => alert('explotaste'), 20)

            setGameState('loose')
        }
    }

    const handleResetClick = () => {
        const newBoard = generateBoard(columns, rows)

        setBoard(newBoard)
        setGameState(null)
    }

    return (

        <div>
            <section className="board"
                style={{
                    gridTemplateColumns: `repeat(${columns}, 1fr)`,
                    gridTemplateRows: `repeat(${rows}, 1fr)`
                }}>

                { board.map((row, i) => row.map((cell, j) => (
                    <Cell onCellClick={handleCellClick}
                        coords={{ i, j }}
                        key={`${i}-${j}`}
                        cell={cell} />)
                )).flat() }
            </section>

            {gameState === 'loose' && <button onClick={handleResetClick}>Reset</button>}
        </div>
    )
}
export default Board;
