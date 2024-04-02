/**
 * Dificulty: Hard
 * Topics: Math, Recursion
 */

const getPermutation = (n, k) => {
    let factorial = 1;
    let numbers = Array.from({ length: n }, (_, i) => i + 1);
    let result = '';

    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }

    for (let i = 0; i < n; i++) {
        factorial /= n - i;

        let index = Math.ceil(k / factorial) - 1;
        result += numbers[index];

        numbers.splice(index, 1);

        k -= index * factorial;
    }

    return result;
};
