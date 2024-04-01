/**
 * Dificulty: Hard
 * Topics: Array, Queue, Sliding Window, Monotonic Queue
 */

const countSubarrays = (nums, minK, maxK) => {
    let count = 0;
    let includingBoth = -1;
    let min = -1;
    let max = -1;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < minK || nums[i] > maxK) {
            includingBoth = i;
        }

        if (nums[i] === minK) {
            min = i;
        }

        if (nums[i] === maxK) {
            max = i;
        }

        if (min !== -1 && max !== -1) {
            count += Math.max(0, Math.min(min, max) - includingBoth);
        }
    }

    return count;
};
