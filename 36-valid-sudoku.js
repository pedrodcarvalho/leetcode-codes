/**
 * Dificulty: Medium
 * Topics: Array, Hash Table, Matrix
 */

const isValidSudoku = (board) => {
    const positions = {
        rows: {},
        columns: {},
        boxes: {}
    };

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const value = board[i][j];

            if (value === '.') {
                continue;
            }

            const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

            if (positions.rows[i] && positions.rows[i][value]) {
                return false;
            }

            if (positions.columns[j] && positions.columns[j][value]) {
                return false;
            }

            if (positions.boxes[boxIndex] && positions.boxes[boxIndex][value]) {
                return false;
            }

            positions.rows[i] = positions.rows[i] || {};
            positions.rows[i][value] = true;

            positions.columns[j] = positions.columns[j] || {};
            positions.columns[j][value] = true;

            positions.boxes[boxIndex] = positions.boxes[boxIndex] || {};
            positions.boxes[boxIndex][value] = true;
        }
    }

    return true;
};
