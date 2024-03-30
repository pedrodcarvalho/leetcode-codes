/**
 * Dificulty: Easy
 * Topics: Array, Binary Search
 */

const searchInsert = (nums, target) => {
    let low = 0;
    let high = nums.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let guess = nums[mid];

        if (guess === target) {
            return mid;
        }
        else if (guess < target) {
            low = mid + 1;
        }
        else {
            high = mid - 1;
        }
    }

    if (nums[low] < target) {
        return low + 1;
    }

    return low;
};
