/**
 * Dificulty: Medium
 * Topics: Hash Table, String, Backtracking
 */

const letterCombinations = (digits) => {
    if (digits.length === 0) {
        return [];
    }

    const phone = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z']
    };

    let result = [];

    let numIterations = digits.split("").map((digit) => {
        return phone[digit].length;
    }).reduce((acc, val) => acc * val);

    for (let i = 0; i < numIterations; i++) {
        let temp = '';
        let tempI = i;

        for (let j = 0; j < digits.length; j++) {
            let digit = digits[j];
            let digitLength = phone[digit].length;
            let index = tempI % digitLength;

            temp += phone[digit][index];
            tempI = Math.floor(tempI / digitLength);
        }

        result.push(temp);
    }

    return result;
};
