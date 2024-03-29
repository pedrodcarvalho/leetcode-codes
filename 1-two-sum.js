/**
 * Dificulty: Easy
 * Topics: Array, Hash Table
 */

const twoSum = (nums, target) => {
    const numsMap = {};

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        const complementIndex = numsMap[complement];

        if (complementIndex !== undefined) {
            return [complementIndex, i];
        }

        numsMap[nums[i]] = i;
    }
};
