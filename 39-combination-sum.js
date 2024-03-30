/**
 * Dificulty: Medium
 * Topics: Array, Backtracking
 */

const combinationSum = (candidates, target) => {
    const result = [];

    const backtrack = (start, target, path) => {
        if (target === 0) {
            result.push([...path]);
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            if (candidates[i] <= target) {
                path.push(candidates[i]);
                backtrack(i, target - candidates[i], path);
                path.pop();
            }
        }
    };

    backtrack(0, target, []);

    return result;
};
