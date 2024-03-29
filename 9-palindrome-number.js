/**
 * Dificulty: Easy
 * Topics: Math
 */

const isPalindrome = (x) => {
    return x.toString() === x.toString().split('').reverse().join('');
};
