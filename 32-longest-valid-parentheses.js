/**
 * Dificulty: Hard
 * Topics: String, Dynamic Programming, Stack
 */

const longestValidParentheses = (s) => {
    let result = 0;

    for (let i = 0; i < s.length; i++) {
        let count = 0;

        for (let j = i; j < s.length; j++) {
            if (s[j] === "(") {
                count++;
            }
            else {
                count--;
            }

            if (count < 0) {
                break;
            }

            if (count === 0) {
                result = Math.max(result, j - i + 1);
            }
        }
    }

    return result;
};
