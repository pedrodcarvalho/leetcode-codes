/**
 * Dificulty: Medium
 * Topics: Math, String, Simulation
 */

const multiply = (num1, num2) => {
    const int1 = num1.split('').reverse().map(char => parseInt(char));
    const int2 = num2.split('').reverse().map(char => parseInt(char));

    const result = new Array(num1.length + num2.length).fill(0);

    for (let i = 0; i < int1.length; i++) {
        for (let j = 0; j < int2.length; j++) {
            result[i + j] += int1[i] * int2[j];
            result[i + j + 1] += Math.floor(result[i + j] / 10);
            result[i + j] %= 10;
        }
    }

    while (result.length > 1 && result[result.length - 1] === 0) {
        result.pop();
    }

    return result.reverse().join('');
};
