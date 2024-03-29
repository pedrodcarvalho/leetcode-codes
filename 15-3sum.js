/**
 * Dificulty: Medium
 * Topics: Array, Two Pointers, Sorting
 */

const threeSum = (nums) => {
    if (nums.every(num => num === 0)) {
        return [[0, 0, 0]];
    }

    nums.sort((a, b) => a - b);

    let result = [];
    let fixedNum = nums[0];

    for (let i = 0; i < nums.length; i++) {
        if (i === 0 || (i > 0 && nums[i] != nums[i - 1])) {
            let left = 0;
            let right = nums.length - 1;
            let sum = 0;

            while (left < right) {
                if ((fixedNum === nums[left] && (i - 1) === left)) {
                    left++;
                    continue;
                }
                if (fixedNum === nums[right] && (i - 1) === right) {
                    right--;
                    continue;
                }

                sum = fixedNum + nums[left] + nums[right];

                if (sum === 0) {
                    if ((fixedNum !== nums[left] || i !== left) && (fixedNum !== nums[right] || i !== right)) {
                        result.push([fixedNum, nums[left], nums[right]].sort((a, b) => a - b));
                    }
                }

                if (sum < 0) {
                    left++;
                }
                else {
                    right--;
                }
            }

            fixedNum = nums[i];
        }
    }

    return [...new Set(result.map(item => item.join(',')))].map(item => item.split(',').map(num => parseInt(num)));
};
