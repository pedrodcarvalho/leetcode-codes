/**
 * Dificulty: Easy
 * Topics: String, Stack
 */

const maxDepth = (s) => {
    s = s.replace(/[^()]/g, '');

    let result = 0;
    let maxAlreadySeen = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            maxAlreadySeen++;
        }
        else {
            maxAlreadySeen--;
        }

        result = Math.max(result, maxAlreadySeen);
    }

    return result;
};
