/**
 * Dificulty: Medium
 * Topics: Array, Sliding Window
 */

const countSubarrays = (nums, k) => {
    const maxNum = Math.max(...nums);

    let result = 0, left = 0, right = 0, maxCount = 0;

    while (right < nums.length) {
        if (nums[right] === maxNum) {
            maxCount++;
        }

        while (maxCount >= k) {
            result += nums.length - right;

            if (nums[left] === maxNum) {
                maxCount--;
            }

            left++;
        }

        right++;
    }

    return result;
};
