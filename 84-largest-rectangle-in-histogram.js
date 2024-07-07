/**
 * Dificulty: Hard
 * Topics: Array, Stack, Monotonic Stack
 */

const largestRectangleArea = (heights) => {
    let stack = [];
    let maxArea = 0;

    heights.push(0);

    heights.map((h, i) => {
        while (stack.length && heights[stack[stack.length - 1]] > h) {
            let height = heights[stack.pop()];
            let width = stack.length ? i - stack[stack.length - 1] - 1 : i;
            maxArea = Math.max(maxArea, height * width);
        }

        stack.push(i);
    });

    return maxArea;
};
