/**
 * Dificulty: Medium
 * Topics: Array, Two Pointers, Greedy
 */

const maxArea = (height) => {
    for (let i = 0, j = height.length - 1, max = 0; i < j;) {
        const h = Math.min(height[i], height[j]);
        const w = j - i;

        max = Math.max(max, h * w);

        if (height[i] < height[j]) {
            i++;
        }
        else {
            j--;
        }

        if (i === j) {
            return max;
        }
    }
};
