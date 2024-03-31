/**
 * Dificulty: Medium
 * Topics: Array, Matrix, Simulation
 */

const spiralOrder = (matrix) => {
    const layers = Math.ceil(Math.min(matrix.length, matrix[0].length) / 2);
    let left = 0;
    let right = matrix[0].length - 1;
    let top = 0;
    let bottom = matrix.length - 1;

    const result = [];

    for (let i = 0; i < layers; i++) {
        for (let j = left; j <= right; j++) {
            result.push(matrix[top][j]);
        }

        for (let j = top + 1; j <= bottom; j++) {
            result.push(matrix[j][right]);
        }

        if (top < bottom) {
            for (let j = right - 1; j >= left; j--) {
                result.push(matrix[bottom][j]);
            }
        }

        if (left < right) {
            for (let j = bottom - 1; j > top; j--) {
                result.push(matrix[j][left]);
            }
        }

        left++;
        right--;
        top++;
        bottom--;
    }

    return result;
};
