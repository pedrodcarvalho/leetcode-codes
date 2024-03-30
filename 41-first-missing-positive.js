/**
 * Dificulty: Hard
 * Topics: Array, Hash Table
 */

const firstMissingPositive = (nums) => {
    nums = nums.filter(num => num > 0);
    nums = [...new Set(nums)];
    nums.sort((a, b) => a - b);
    let minPositive = nums[0];

    if (minPositive !== 1) return 1;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === minPositive) {
            minPositive++;
            continue;
        }
        else {
            return minPositive;
        }
    }

    return minPositive;
};
