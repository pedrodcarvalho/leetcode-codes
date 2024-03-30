/**
 * Dificulty: Medium
 * Topics: Math, Bit Manipulation
 */

const divide = (dividend, divisor) => {
    if (dividend === 0) return 0;
    if (dividend === -2147483648 && divisor === -1) return 2147483647
    if (Math.abs(divisor) === 1) return dividend * divisor;

    const isNegative = (dividend < 0) ^ (divisor < 0);

    let result = 0;

    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);

    while (dividend >= divisor) {
        let multiple = 1;
        let temp = divisor;

        while (temp <= (dividend >> 1)) {
            temp <<= 1;
            multiple <<= 1;
        }

        dividend -= temp;
        result += multiple;
    }

    return isNegative ? -result : result;
};
