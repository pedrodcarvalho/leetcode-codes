/**
 * Dificulty: Easy
 * Topics: String, Stack
 */

const makeGood = (s) => {
    let stack = s.split('');

    for (let i = stack.length; i >= 0; i--) {
        if (stack[i]?.toLowerCase() === stack[i + 1]?.toLowerCase() && stack[i] !== stack[i + 1]) {
            stack.splice(i, 2);
            i += 2;
        }
    }

    return stack.join('');
};
