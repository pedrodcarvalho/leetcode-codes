/**
 * Dificulty: Medium
 * Topics: Math, Dynamic Programming, Combinatorics
 */

const uniquePaths = (m, n) => {
    let dp = new Array(m).fill(1);

    for (let i = 1; i < n; i++) {
        let newRow = new Array(m).fill(1);

        for (let j = 1; j < m; j++) {
            newRow[j] = newRow[j - 1] + dp[j];
        }

        dp = newRow;
    }

    return dp[m - 1];
};
