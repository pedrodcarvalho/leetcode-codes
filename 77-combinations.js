/**
 * Dificulty: Medium
 * Topics: Backtracking
 */

const combine = (n, k) => {
    const result = [];

    const backtrack = (start, current) => {
        if (current.length === k || current.length + n - start + 1 < k) {
            if (current.length === k) {
                result.push([...current]);
            }

            return;
        }

        for (let i = start; i <= n; i++) {
            current.push(i);
            backtrack(i + 1, current);
            current.pop();
        }
    }

    backtrack(1, []);

    return result;
};
