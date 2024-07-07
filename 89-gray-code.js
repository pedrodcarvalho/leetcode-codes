/**
 * Dificulty: Medium
 * Topics: Math, Backtracking, Bit Manipulation
 */

const grayCode = (n) => {
    const result = Array(2 ** n).fill(0);

    return result.map((_, i) => i ^ (i >> 1));
};
