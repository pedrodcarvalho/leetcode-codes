/**
 * Dificulty: Medium
 * Topics: Array, Two Pointers
 */

const removeDuplicates = (nums) => {
    let first = 0;
    let second = 1;

    for (let i = 2; i < nums.length; i++) {
        if (nums[first] === nums[second] && nums[first] === nums[i]) {
            nums.splice(i, 1);

            i--;
            continue;
        }

        first++;
        second++;
    }

    return nums.length;
};
