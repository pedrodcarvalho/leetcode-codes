/**
 * Dificulty: Hard
 * Topics: String
 */

const isNumber = (s) => {
    const regex = /^[-+]?(\d+(\.\d*)?|\.\d+)(e[-+]?\d+)?$/i;

    return regex.test(s.trim());
};
