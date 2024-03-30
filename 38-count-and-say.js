/**
 * Dificulty: Medium
 * Topics: String
 */

const countAndSay = (n) => {
    const recursiveFn = (str, n) => {
        if (n === 1) return str;

        let count = 1;
        let newStr = '';

        for (let i = 0; i < str.length; i++) {
            if (str[i] === str[i + 1]) {
                count++;
            }
            else {
                newStr += count + str[i];
                count = 1;
            }
        }

        return recursiveFn(newStr, n - 1);
    };

    return recursiveFn('1', n);
};
