/**
 * Dificulty: Easy
 * Topics: String
 */

const lengthOfLastWord = (s) => {
    return s.split(' ').filter(word => word.length > 0).pop().length;
};
