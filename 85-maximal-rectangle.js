/**
 * Dificulty: Hard
 * Topics: Array, Dynamic Programming, Stack, Matrix, Monotonic Stack
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

const maximalRectangle = (matrix) => {
    if (matrix.length === 0) return 0;

    const rows = matrix.length;
    const cols = matrix[0].length;
    const heights = Array(cols).fill(0);
    let maxArea = 0;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] === '1') {
                heights[j] += 1;
            }
            else {
                heights[j] = 0;
            }
        }

        maxArea = Math.max(maxArea, largestRectangleArea(heights));
    }

    return maxArea;
};

console.log(maximalRectangle([['1', '0', '1', '0', '0'], ['1', '0', '1', '1', '1'], ['1', '1', '1', '1', '1'], ['1', '0', '0', '1', '0']]));
