/**
 * Dificulty: Hard
 * Topics: Array, Hash Table, Sliding Window, Counting
 */

const subarraysWithKDistinct = (nums, k) => {
    const atMostK = (nums, k) => {
        let left = 0;
        let count = 0;
        let freq = new Map();

        for (let right = 0; right < nums.length; right++) {
            if (!freq.has(nums[right])) {
                freq.set(nums[right], 0);
            }

            freq.set(nums[right], freq.get(nums[right]) + 1);

            while (freq.size > k) {
                freq.set(nums[left], freq.get(nums[left]) - 1);

                if (freq.get(nums[left]) === 0) {
                    freq.delete(nums[left]);
                }

                left++;
            }

            count += right - left + 1;
        }

        return count;
    };

    return atMostK(nums, k) - atMostK(nums, k - 1);
};
