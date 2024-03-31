/**
 * Dificulty: Medium
 * Topics: Math, Recursion
 */

const myPow = (x, n) => {
    return n < 0 ? 1 / Math.pow(x, Math.abs(n)) : Math.pow(x, n);
};
