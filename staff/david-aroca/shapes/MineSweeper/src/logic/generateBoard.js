function generateBoard(columns, rows, bombs) {
    const board = new Array(rows)

    const cellsQuantity = columns * rows

    const indexes = []

    for (let i = 0; i < bombs; i++) {
        const index = Math.floor(Math.random() * cellsQuantity - 1)

        const indexI = Math.floor(index / rows)
        const indexJ = index % columns

        if (indexes.some((index => index.i === indexI && index.j === indexJ)))
            i--

        else indexes.push({ i: indexI, j: indexJ })
    }

    for (let i = 0; i < board.length; i++) {
        board[i] = new Array(columns);

        for (let j = 0; j < board[i].length; j++) {
            const isBomb = indexes.some(index => index.j === j && index.i === i)

            const cell = {
                isBomb,
                isClicked: false,
            };

            board[i][j] = cell
        }
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            let bombsAside = 0

            if (board[i][j - 1]?.isBomb) bombsAside++
            if (board[i][j + 1]?.isBomb) bombsAside++
            if (board[i - 1]?.[j].isBomb) bombsAside++
            if (board[i + 1]?.[j].isBomb) bombsAside++
            if (board[i - 1]?.[j - 1]?.isBomb) bombsAside++
            if (board[i - 1]?.[j + 1]?.isBomb) bombsAside++
            if (board[i + 1]?.[j - 1]?.isBomb) bombsAside++
            if (board[i + 1]?.[j + 1]?.isBomb) bombsAside++

            board[i][j].bombsAside = bombsAside
        }
    }

    return board
}

export { generateBoard }