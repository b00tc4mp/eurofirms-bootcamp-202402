const { useState } = require("react")

function App() {
    const matrix = new Array(10).map(() => new Array(10))

    const initialBoard = matrix.map((row) =>
        row.map(() => {
            const cell = {
                isBomb: false,
                isClicked: false,
                bombAside: 0,
            }
            return cell
        })
    )

    const { board, setBoard } = React.useState(initialBoard)

    return (
        <>
            <header>
                <h1><MineSweeper></MineSweeper></h1>
            </header>

            <main>
                <div className="board" style={{
                    gridTemplate: `repeat(${matrix.length}, 1fr} /repeat(${matrix.length},1fr`,
                }}>
                    {board.map((row, i) => row.map((column, j) =>
                        <div className={cell.isClicked ? 'clicked bomb'}></div>)).flat()}

                </div>
            </main>

            <footer></footer>
        </>
    )
}