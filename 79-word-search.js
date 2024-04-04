/**
 * Dificulty: Medium
 * Topics: Array, String, Backtracking, Matrix
 */

const exist = (board, word) => {
    let neighbors = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    let visited = new Set();

    const dfs = (i, j, index) => {
        if (index === word.length) {
            return true;
        }

        if (i < 0 || i >= board.length || j < 0 || j >= board[0].length) {
            return false;
        }

        if (visited.has(`${i},${j}`) || board[i][j] !== word[index]) {
            return false;
        }

        visited.add(`${i},${j}`);

        for (let [k, l] of neighbors) {
            if (dfs(i + k, j + l, index + 1)) {
                return true;
            }
        }

        visited.delete(`${i},${j}`);

        return false;
    };

    let result = false;

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            result = result || dfs(i, j, 0);
        }
    }

    return result;
};

console.log(exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "ABCB"));
