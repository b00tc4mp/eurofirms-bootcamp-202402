function clearCells(board, i, j) {
    if (board[i][j - 1]) {
        const cellCopy = { ...board[i][j - 1] }


        if (cellCopy.bombsAside === 0 && !cellCopy.isRevealed) {
            cellCopy.isRevealed = true

            board[i][j - 1] = cellCopy

            clearCells(board, i, j - 1)
        }

        else {
            cellCopy.isRevealed = true

            board[i][j - 1] = cellCopy
        }
    }

    if (board[i][j + 1]) {
        const cellCopy = { ...board[i][j + 1] }

        if (cellCopy.bombsAside === 0 && !cellCopy.isRevealed) {
            cellCopy.isRevealed = true

            board[i][j + 1] = cellCopy

            clearCells(board, i, j + 1)
        }

        else {
            cellCopy.isRevealed = true

            board[i][j + 1] = cellCopy
        }
    }

    if (board[i - 1]?.[j]) {
        const cellCopy = { ...board[i - 1][j] }

        if (cellCopy.bombsAside === 0 && !cellCopy.isRevealed) {
            cellCopy.isRevealed = true

            board[i - 1][j] = cellCopy

            clearCells(board, i - 1, j)
        }

        else {
            cellCopy.isRevealed = true

            board[i - 1][j] = cellCopy
        }
    }

    if (board[i + 1]?.[j]) {
        const cellCopy = { ...board[i + 1][j] }

        if (cellCopy.bombsAside === 0 && !cellCopy.isRevealed) {
            cellCopy.isRevealed = true

            board[i + 1][j] = cellCopy

            clearCells(board, i + 1, j)
        }

        else {
            cellCopy.isRevealed = true

            board[i + 1][j] = cellCopy
        }
    }

    if (board[i - 1]?.[j - 1]) {
        const cellCopy = { ...board[i - 1][j - 1] }

        if (cellCopy.bombsAside === 0 && !cellCopy.isRevealed) {
            cellCopy.isRevealed = true

            board[i - 1][j - 1] = cellCopy

            clearCells(board, i - 1, j - 1)
        }

        else {
            cellCopy.isRevealed = true

            board[i - 1][j - 1] = cellCopy
        }
    }

    if (board[i - 1]?.[j + 1]) {
        const cellCopy = { ...board[i - 1][j + 1] }

        if (cellCopy.bombsAside === 0 && !cellCopy.isRevealed) {
            cellCopy.isRevealed = true

            board[i - 1][j + 1] = cellCopy

            clearCells(board, i - 1, j + 1)
        }

        else {
            cellCopy.isRevealed = true

            board[i - 1][j + 1] = cellCopy
        }
    }

    if (board[i + 1]?.[j - 1]) {
        const cellCopy = { ...board[i + 1][j - 1] }

        if (cellCopy.bombsAside === 0 && !cellCopy.isRevealed) {
            cellCopy.isRevealed = true

            board[i + 1][j - 1] = cellCopy


            clearCells(board, i + 1, j - 1)
        }

        else {
            cellCopy.isRevealed = true

            board[i + 1][j - 1] = cellCopy
        }
    }

    if (board[i + 1]?.[j + 1]) {
        const cellCopy = { ...board[i + 1][j + 1] }

        if (cellCopy.bombsAside === 0 && !cellCopy.isRevealed) {
            cellCopy.isRevealed = true

            board[i + 1][j + 1] = cellCopy

            clearCells(board, i + 1, j + 1)
        }

        else {
            cellCopy.isRevealed = true

            board[i + 1][j + 1] = cellCopy
        }
    }
}

export { clearCells }