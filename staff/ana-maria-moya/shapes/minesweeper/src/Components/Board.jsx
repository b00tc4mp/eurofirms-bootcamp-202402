import {useState} from "react";
import { generateBoard } from "../logic/generateBoard";
import Cell from "./Cell";

const columns = 12
const rows = 12
const bombs = 20

const initialBoard = generateBoard(columns, rows, bombs)

function Board(){
    const [board, setBoard] = useState(initialBoard)
    const [isGameFinished, setGameFinished] = useState(null)
    const [isFlagClicked, setIsFlagClicked] = useState(false)
    const [markedBombs, setMarkedBombs] = useState(0)

    const handleCellClick = (i, j) => {
        if(isGameFinished) return

        const boardCopy = [...board].map(row =>  [...row])

        const cellCopy = {...boardCopy[i][j]}

        
        if(isFlagClicked){
            setMarkedBombs(markedBombs + 1)

            cellCopy.isMarked = true
        }

        else if(cellCopy.isMarked) {
            cellCopy.isMarked = false

            setMarkedBombs(markedBombs - 1)
        }

        else cellCopy.isRevealed = true

        boardCopy[i][j] = cellCopy

        setBoard(boardCopy)

        if(cellCopy.isBomb && cellCopy.isRevealed){
            setTimeout(()=>alert('explotaste'), 20)

           setGameFinished(true)
        } 
    }

    const handleResetClick = () => {
        const newBoard = generateBoard(columns, rows, bombs)

        setBoard(newBoard)
        setGameState(null)
        setMarkedBombs(0)
    }

    const finishGameHandler = () => {
        const isGameWinned = !board.some(row => row.some(cell => cell.isBomb && !cell.isMarked))

        if(isGameWinned){
            setGameFinished(true)

            alert('Ganaste!')
        }
        else{
            setGameFinished(true)

            alert('Perdiste')
        }
    }

    return (
    <div>
         <div className="board-buttons">
            <button onClick={()=> setIsFlagClicked(true)}>🚩</button>
            <button onClick={()=> setIsFlagClicked(false)}>🔍</button>
            <span>Bombs revealed: {markedBombs} / {bombs}</span>
            <button disabled={markedBombs !== bombs || isGameFinished} onClick={finishGameHandler}>Finish Game</button>
        </div>
        <section 
        className="board" 
        style={{
            gridTemplateColumns: `repeat(${columns}, 1fr)`,
            gridTemplateRows: `repeat(${rows}, 1fr)`,
        }}
        >
            { board.map((row, i) => row.map((cell, j) => (
            <Cell 
            isGameFinished={isGameFinished}
            isFlagClicked={isFlagClicked}
                onCellClick={handleCellClick}
                coords={{i, j}}
                key={`${i}-${j}`} 
                cell={cell} />)
                )).flat()}
        </section>
    {isGameFinished === 'loose' && <button onClick={handleResetClick}>Reset</button>}
    </div>
)
}

export default Board