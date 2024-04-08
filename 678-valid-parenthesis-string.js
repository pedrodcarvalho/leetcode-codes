/**
 * Dificulty: Medium
 * Topics: String, Dynamic Programming, Stack, Greedy
 */

const checkValidString = (s) => {
    let stack = [];
    let wildCardStack = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            stack.push(i);
        }
        else if (s[i] === "*") {
            wildCardStack.push(i);
        }
        else {
            if (stack.length) {
                stack.pop();
            }
            else if (wildCardStack.length) {
                wildCardStack.pop();
            }
            else {
                return false;
            }
        }
    }

    while (stack.length && wildCardStack.length) {
        if (stack.pop() > wildCardStack.pop()) {
            return false;
        }
    }

    return stack.length == 0;
};
