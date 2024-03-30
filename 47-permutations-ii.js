/**
 * Dificulty: Medium
 * Topics: Array, Backtracking
 */

const permuteUnique = (nums) => {
    if (nums.length === 1) return [nums];

    let result = [];

    for (let i = 0; i < nums.length; i++) {
        let first = nums[i];
        let rest = nums.slice(0, i).concat(nums.slice(i + 1));

        let innerPermutations = permuteUnique(rest);

        for (let j = 0; j < innerPermutations.length; j++) {
            let permutation = [first].concat(innerPermutations[j]);

            if (!result.some((r) => r.join('') === permutation.join(''))) {
                result.push(permutation);
            }
        }
    }

    return result;
};
