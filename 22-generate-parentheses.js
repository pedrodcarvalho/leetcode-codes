/**
 * Dificulty: Medium
 * Topics: String, Dynamic Programming, Backtracking
 */

const generateParenthesis = (n) => {
    let result = [];

    const backtrack = (str, open, close) => {
        if (str.length === n * 2) {
            result.push(str);
            return;
        }

        if (open < n) {
            backtrack(`${str}(`, open + 1, close);
        }
        if (close < open) {
            backtrack(`${str})`, open, close + 1);
        }
    }

    backtrack('', 0, 0);

    return result;
};
