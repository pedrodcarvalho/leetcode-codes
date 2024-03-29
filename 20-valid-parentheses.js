/**
 * Dificulty: Easy
 * Topics: String, Stack
 */

const isValid = (s) => {
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        if (stack.length == 0) {
            stack.push(s[i])
        }
        else {
            const last = stack[stack.length - 1];

            if (last == '(' && s[i] == ')' || last == '[' && s[i] == ']' || last == '{' && s[i] == '}') {
                stack.pop();
            }
            else {
                stack.push(s[i]);
            }
        }
    }

    return stack.length == 0;
};
