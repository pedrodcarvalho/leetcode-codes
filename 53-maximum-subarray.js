/**
 * Dificulty: Medium
 * Topics: Array, Divide and Conquer, Dynamic Programming
 */

const maxSubArray = (nums) => {
    let max = nums[0];

    for (let i = 1; i < nums.length; i++) {
        nums[i] += Math.max(0, nums[i - 1]);

        if (nums[i] > max) {
            max = nums[i];
        }
    }

    return max;
};
