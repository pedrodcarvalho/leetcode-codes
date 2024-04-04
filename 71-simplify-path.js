/**
 * Dificulty: Medium
 * Topics: String, Stack
 */

const simplifyPath = (path) => {
    path = path.replace(/\/\//g, '/');

    let stack = path.split('/').filter((item) => item !== '' && item !== '.');

    let result = [];

    for (let i = 0; i < stack.length; i++) {
        if (stack[i] === '..') {
            result.pop();
        }
        else {
            result.push(stack[i]);
        }
    }

    if (result.length === 0) {
        return '/';
    }

    return result.reduce((acc, item) => acc + '/' + item, '');
};
