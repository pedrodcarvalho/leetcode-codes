/**
 * Dificulty: Medium
 * Topics: Array, Sorting
 */

const merge = (intervals) => {
    let result = [];
    intervals.sort((a, b) => a[0] - b[0]);

    for (let i = 0; i < intervals.length; i++) {
        let current = intervals[i];
        let last = result[result.length - 1];

        if (!last || last[1] < current[0]) {
            result.push(current);
        }
        else {
            last[1] = Math.max(last[1], current[1]);
        }
    }

    return result;
};
