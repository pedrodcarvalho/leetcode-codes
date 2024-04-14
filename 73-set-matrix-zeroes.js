/**
 * Dificulty: Medium
 * Topics: Array, Hash Table, Matrix
 */

const setZeroes = (matrix) => {
    const hashTable = {
        rows: {},
        cols: {}
    };

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                hashTable.rows[i] = true;
                hashTable.cols[j] = true;
            }
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (hashTable.rows[i] || hashTable.cols[j]) {
                matrix[i][j] = 0;
            }
        }
    }

    return matrix;
};
