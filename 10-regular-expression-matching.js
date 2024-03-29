/**
 * Dificulty: Hard
 * Topics: String, Dynamic Programming, Recursion
 */

const isMatch = (s, p) => {
    p = p.replace(/[*]{2,}/g, '*');
    const regex = new RegExp(`^${p}$`);

    return regex.test(s);
};
