let currentPlayer = 'X';
let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];
var fondo = document.getElementById("fondo");
var pop = document.getElementById("pop");

var corasones = document.getElementById("corason");
var equises = document.getElementById("equis");

function makeMove(row, col) {
    if (board[row][col] === '' && currentPlayer === 'X') {
        board[row][col] = currentPlayer;
        document.getElementById('celda_' + row + '_' + col).classList.add('equis');
        pop.play();

        if (checkWinner()) {
            alert(currentPlayer + 'Es probabilísticamente imposible que consigas ganar, pero si lo consigues, enhorabuena xD');
            restartGame();
        } else if (isBoardFull()) {
            alert('EMPATE: ¡HAS CONSEGUIDO EL MEJOR RESULTADO POSIBLE!');
            var empate = confirm("¿Quieres volver a jugar?");
        }
        if (empate) {
            setTimeout(function() {
                location.reload();
            }, 2000);
        }
        else {
            currentPlayer = 'O';
            makeAIMove();
        }
        if (!fondo.musica) {
            fondo.play();
            fondo.musica = true;
        }
    }
}

function makeAIMove() {
    setTimeout(function() {
        let bestScore = -Infinity;
        let bestMove;

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (board[i][j] === '') {
                    board[i][j] = 'O';
                    let score = minimax(board, 0, false);
                    board[i][j] = '';

                    if (score > bestScore) {
                        bestScore = score;
                        bestMove = { row: i, col: j };
                    }
                }
            }
        }

        board[bestMove.row][bestMove.col] = 'O';
        document.getElementById('celda_' + bestMove.row + '_' + bestMove.col).classList.add('corason');
        pop.play();

        if (checkWinner()) {
            alert('¡NUNCA PODRÁS DERROTAR A LA IA!');
            var perdedor = confirm("¿Quieres volver a intentarlo?");
        }
        if (perdedor) {
            setTimeout(function() {
                location.reload();
            }, 2000);
        }
        else {
            currentPlayer = 'X';
        }
    }, 1500);
}

function minimax(board, depth, isMaximizing) {
    if (checkWinner()) {
        return isMaximizing ? -1 : 1;
    } else if (isBoardFull()) {
        return 0;
    }

    if (isMaximizing) {
        let bestScore = -Infinity;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (board[i][j] === '') {
                    board[i][j] = 'O';
                    bestScore = Math.max(bestScore, minimax(board, depth + 1, !isMaximizing));
                    board[i][j] = '';
                }
            }
        }
        return bestScore;
    } else {
        let bestScore = Infinity;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (board[i][j] === '') {
                    board[i][j] = 'X';
                    bestScore = Math.min(bestScore, minimax(board, depth + 1, !isMaximizing));
                    board[i][j] = '';
                }
            }
        }
        return bestScore;
    }
}

function checkWinner() {
    for (let i = 0; i < 3; i++) {
        if (board[i][0] !== '' && board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
            return true;
        }
        if (board[0][i] !== '' && board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
            return true;
        }
    }

    if (board[0][0] !== '' && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
        return true;
    }
    if (board[0][2] !== '' && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
        return true;
    }

    return false;
}

function isBoardFull() {
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
            if (board[row][col] === '') {
                return false;
            }
        }
    }
    return true;
}