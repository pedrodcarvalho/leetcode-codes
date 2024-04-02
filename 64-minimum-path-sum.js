/**
 * Dificulty: Medium
 * Topics: Array, Dynamic Programming, Matrix
 */

const minPathSum = (grid) => {
    const m = grid.length;
    const n = grid[0].length;

    let dp = new Array(n).fill(0);
    dp[0] = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i > 0 && j > 0) {
                dp[j] = Math.min(dp[j], dp[j - 1]);
            }
            else if (j > 0) {
                dp[j] = dp[j - 1];
            }

            dp[j] += grid[i][j];
        }
    }

    return dp[n - 1];
};
