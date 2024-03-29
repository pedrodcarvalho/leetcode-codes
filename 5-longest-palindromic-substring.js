/**
 * Dificulty: Medium
 * Topics: String, Dynamic Programming
 */

const longestPalindrome = (s) => {
    if (s.length <= 1) return s;

    let longest = '';

    const expandAroundCenter = (left, right) => {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            const currentLongest = s.substring(left, right + 1);

            if (currentLongest.length > longest.length) {
                longest = currentLongest;
            }

            left--;
            right++;
        }
    };

    for (let i = 0; i < s.length; i++) {
        expandAroundCenter(i, i);
        expandAroundCenter(i, i + 1);
    }

    return longest;
};
