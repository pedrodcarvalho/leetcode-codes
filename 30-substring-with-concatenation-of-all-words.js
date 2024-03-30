/**
 * Dificulty: Hard
 * Topics: Hash Table, String, Sliding Window
 */

const findSubstring = (s, words) => {
    if (!s || !words || words.length === 0) {
        return [];
    }

    const wordLength = words[0].length;
    const wordCount = words.length;
    const wordMap = words.reduce((acc, word) => { acc[word] = (acc[word] || 0) + 1; return acc; }, {});
    const result = [];

    for (let i = 0; i < wordLength; i++) {
        let left = i;
        let right = i;
        let count = 0;
        let currentMap = {};

        while (right + wordLength <= s.length) {
            const currentWord = s.substring(right, right + wordLength);
            right += wordLength;

            if (wordMap[currentWord]) {
                currentMap[currentWord] = (currentMap[currentWord] || 0) + 1;
                count++;

                while (currentMap[currentWord] > wordMap[currentWord]) {
                    const leftWord = s.substring(left, left + wordLength);
                    left += wordLength;
                    currentMap[leftWord]--;
                    count--;
                }

                if (count === wordCount) {
                    result.push(left);
                }
            }
            else {
                left = right;
                count = 0;
                currentMap = {};
            }
        }
    }

    return result;
};
