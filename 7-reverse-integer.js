/**
 * Dificulty: Medium
 * Topics: Math
 */

const reverse = (x) => {
    let reversedNum = x.toString().split('').reverse().join('');

    if (parseInt(reversedNum) > Math.pow(2, 31) - 1 || parseInt(reversedNum) < Math.pow(-2, 31)) {
        return 0;
    }

    return x < 0 ? parseInt(reversedNum) * -1 : parseInt(reversedNum);
};
