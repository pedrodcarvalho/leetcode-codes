/**
 * Dificulty: Hard
 * Topics: Hash Table, String, Sliding Window
 */

const minWindow = (s, t) => {
    const includingLetter = {};

    for (let i = 0; i < t.length; i++) {
        if (includingLetter[t[i]]) {
            includingLetter[t[i]]++;
        }
        else {
            includingLetter[t[i]] = 1;
        }
    }

    let left = 0;
    let right = 0;
    let minWindow = "";
    let minWindowLength = Number.MAX_SAFE_INTEGER;
    let counter = t.length;

    while (right < s.length) {
        if (includingLetter[s[right]] > 0) {
            counter--;
        }

        includingLetter[s[right]]--;
        right++;

        while (counter === 0) {
            if (right - left < minWindowLength) {
                minWindow = s.substring(left, right);
                minWindowLength = right - left;
            }

            if (includingLetter[s[left]] === 0) {
                counter++;
            }

            includingLetter[s[left]]++;
            left++;
        }
    }

    return minWindow;
};
