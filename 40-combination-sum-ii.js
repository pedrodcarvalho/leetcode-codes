/**
 * Dificulty: Medium
 * Topics: Array, Backtracking
 */

const combinationSum2 = (candidates, target) => {
    const result = [];

    // Sort the candidates to skip duplicates
    candidates.sort((a, b) => a - b);

    const backtrack = (start, target, path) => {
        if (target === 0) {
            result.push([...path]);
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            // Skip duplicates
            if (i > start && candidates[i] === candidates[i - 1]) {
                continue;
            }

            if (candidates[i] <= target) {
                path.push(candidates[i]);
                // Starts from i + 1 because we can't reuse the same element
                backtrack(i + 1, target - candidates[i], path);
                path.pop();
            }
        }
    };

    backtrack(0, target, []);

    return result;
};
