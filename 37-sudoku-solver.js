/**
 * Dificulty: Hard
 * Topics: Array, Hash Table, Backtracking, Matrix
 */

const isValidSudoku = (board, i, j, k) => {
    for (let l = 0; l < board.length; l++) {
        if (board[i][l] === k) {
            return false;
        }

        if (board[l][j] === k) {
            return false;
        }

        const box = board[3 * Math.floor(i / 3) + Math.floor(l / 3)][3 * Math.floor(j / 3) + l % 3];

        if (box === k) {
            return false;
        }
    }

    return true;
};

const solveSudoku = (board) => {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            if (board[i][j] === '.') {
                for (let k = 1; k < 10; k++) {
                    if (isValidSudoku(board, i, j, k.toString())) {
                        board[i][j] = k.toString();

                        let result = solveSudoku(board);

                        if (result !== false) {
                            return result;
                        }

                        board[i][j] = '.';
                    }
                }

                return false;
            }
        }
    }

    return board;
};
