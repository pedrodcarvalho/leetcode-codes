/**
 * Dificulty: Medium
 * Topics: Array, Matrix, Simulation
 */

const generateMatrix = (n) => {
    const matrix = Array.from({ length: n }, () => Array(n).fill(0));
    let count = 1;

    const layers = Math.ceil(Math.min(matrix.length, matrix[0].length) / 2);
    let left = 0;
    let right = matrix[0].length - 1;
    let top = 0;
    let bottom = matrix.length - 1;

    for (let i = 0; i < layers; i++) {
        for (let j = left; j <= right; j++) {
            matrix[top][j] = count;
            count++;
        }

        for (let j = top + 1; j <= bottom; j++) {
            matrix[j][right] = count;
            count++;
        }

        if (top < bottom) {
            for (let j = right - 1; j >= left; j--) {
                matrix[bottom][j] = count;
                count++;
            }
        }

        if (left < right) {
            for (let j = bottom - 1; j > top; j--) {
                matrix[j][left] = count;
                count++;
            }
        }

        left++;
        right--;
        top++;
        bottom--;
    }

    return matrix;
};
