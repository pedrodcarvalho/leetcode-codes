/**
 * Dificulty: Hard
 * Topics: Array, Backtracking
 */

const solveNQueens = (n) => {
    let columns = new Set();
    let positiveDiagonals = new Set();
    let negativeDiagonals = new Set();

    let result = [];
    let board = Array.from({ length: n }, () => Array.from({ length: n }, () => '.'));

    const backtrack = (row) => {
        if (row === n) {
            result.push(board.map((r) => r.join('')));
            return;
        }

        for (let col = 0; col < n; col++) {
            if (columns.has(col) || positiveDiagonals.has(row + col) || negativeDiagonals.has(row - col)) {
                continue;
            }

            columns.add(col);
            positiveDiagonals.add(row + col);
            negativeDiagonals.add(row - col);
            board[row][col] = 'Q';

            backtrack(row + 1);

            columns.delete(col);
            positiveDiagonals.delete(row + col);
            negativeDiagonals.delete(row - col);
            board[row][col] = '.';
        }
    }

    backtrack(0);
    return result;
};
