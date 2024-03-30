/**
 * Dificulty: Medium
 * Topics: Array, Two Pointers
 */

const reverse = (nums, start) => {
    let left = start;
    let right = nums.length - 1;

    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }
};

const nextPermutation = (nums) => {
    let k = nums.length - 2;

    while (k >= 0 && nums[k] >= nums[k + 1]) {
        k--;
    }

    if (k === -1) {
        nums.reverse();
        return nums;
    }

    let l = nums.length - 1;

    while (nums[l] <= nums[k]) {
        l--;
    }

    [nums[k], nums[l]] = [nums[l], nums[k]];

    reverse(nums, k + 1);

    return nums;
};
