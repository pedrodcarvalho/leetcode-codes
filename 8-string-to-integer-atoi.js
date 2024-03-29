/**
 * Dificulty: Medium
 * Topics: String
 */

const myAtoi = (s) => {
    const num = s.trim().replace(/e.*/, '');

    if (parseFloat(num) > Math.pow(2, 31) - 1) {
        return Math.pow(2, 31) - 1;
    }
    if (parseFloat(num) < Math.pow(-2, 31)) {
        return Math.pow(-2, 31);
    }

    return parseFloat(num) || 0;
};
