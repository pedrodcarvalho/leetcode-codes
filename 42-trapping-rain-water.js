/**
 * Dificulty: Hard
 * Topics: Array, Two Pointers, Dynamic Programming, Stack, Monotonic Stack
 */

const trap = (height) => {
    if (!height || height.length === 0) return 0;

    let left = 0;
    let right = height.length - 1;
    let leftMax = 0;
    let rightMax = 0;
    let result = 0;

    while (left < right) {
        height[left] > leftMax
            ? (leftMax = height[left])
            : (result += leftMax - height[left]);

        height[right] > rightMax
            ? (rightMax = height[right])
            : (result += rightMax - height[right]);

        height[left] < height[right]
            ? left++
            : right--;
    }

    return result;
};
