/**
 * Dificulty: Medium
 * Topics: Array, Binary Search, Matrix
 */

const searchMatrix = (matrix, target) => {
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
        return false;
    }

    let low = 0;
    let high = matrix.length * matrix[0].length - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const midValue = matrix[Math.floor(mid / matrix[0].length)][mid % matrix[0].length];

        if (midValue === target) {
            return true;
        }
        else if (midValue < target) {
            low = mid + 1;
        }
        else {
            high = mid - 1;
        }
    }

    return false;
};
