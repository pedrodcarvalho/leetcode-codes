/**
 * Dificulty: Medium
 * Topics: Array, Two Pointers, Sorting
 */

const sortColors = (nums) => {
    const colorCounter = [0, 0, 0];

    for (let i = 0; i < nums.length; i++) {
        colorCounter[nums[i]]++;
    }

    for (let i = 0; i < nums.length; i++) {
        if (i < colorCounter[0]) {
            nums[i] = 0;
        }
        else if (i < colorCounter[0] + colorCounter[1]) {
            nums[i] = 1;
        }
        else {
            nums[i] = 2;
        }
    }
};
