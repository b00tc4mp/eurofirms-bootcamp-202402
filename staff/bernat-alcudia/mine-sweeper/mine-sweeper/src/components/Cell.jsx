function Cell(props) {
    const { cell, coords, isFlagClicked, isGameFinished, onCellClick } = props

    if (cell.isRevealed || isGameFinished) {
        return (
            <div className={`clicked-cell ${isFlagClicked ? 'flag-cursor' : 'pointer-cursor'}`}>
                {cell.isBomb && cell.isMarked && <span>💥 🚩</span>}
                {!cell.isBomb && cell.isMarked && <span> {cell.bombsAside} 🚩</span>}
                {cell.isBomb && !cell.isMarked && '💥'}
                {!cell.isBomb && !cell.isMarked && cell.bombsAside}
            </div>
        )
    }
}

export default Cell