/**
 * Dificulty: Medium
 * Topics: Array, Dynamic Programming, Greedy
 */

const canJump = (nums) => {
    let jumps = 0, currentJumpEnd = 0, farthest = 0;

    for (let i = 0; i < (nums.length - 1); i++) {
        farthest = Math.max(farthest, i + nums[i]);

        if (farthest === i) {
            return false;
        }

        if (i === currentJumpEnd) {
            jumps++;
            currentJumpEnd = farthest;
        }
    }

    return true;
};
