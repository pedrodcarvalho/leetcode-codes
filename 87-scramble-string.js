/**
 * Dificulty: Hard
 * Topics: String, Dynamic Programming
 */

const isScramble = (s1, s2) => {
    const n = s1.length;

    if (n !== s2.length) return false;
    if (s1 === s2) return true;

    const dp = Array.from({ length: n }, () => Array.from({ length: n }, () => Array(n + 1).fill(false)));

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            dp[i][j][1] = s1[i] === s2[j];
        }
    }

    for (let len = 2; len <= n; len++) {
        for (let i = 0; i <= n - len; i++) {
            for (let j = 0; j <= n - len; j++) {
                for (let k = 1; k < len; k++) {
                    if ((dp[i][j][k] && dp[i + k][j + k][len - k]) || (dp[i][j + len - k][k] && dp[i + k][j][len - k])) {
                        dp[i][j][len] = true;
                        break;
                    }
                }
            }
        }
    }

    return dp[0][0][n];
};
