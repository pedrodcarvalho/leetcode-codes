/**
 * Dificulty: Medium
 * Topics: Array, Binary Search
 */

const searchRange = (nums, target) => {
    let low = 0;
    let high = nums.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let guess = nums[mid];

        if (guess === target) {
            let start = mid;
            let end = mid;

            while (nums[start] === target) {
                start--;
            }

            while (nums[end] === target) {
                end++;
            }

            return [start + 1, end - 1];
        }
        else if (guess < target) {
            low = mid + 1;
        }
        else {
            high = mid - 1;
        }
    }

    return [-1, -1];
};
