/**
 * Dificulty: Medium
 * Topics: String
 */

const convert = (s, numRows) => {
    if (numRows === 2) {
        let odd = '';
        let even = '';

        s.split('').map((char, index) => {
            if (index % 2 === 0) {
                even += char;
            } else {
                odd += char;
            }
        });

        return even + odd;
    }

    let trendingDown = true;
    let goingUpCount = 0;
    let goingDownCount = 0;
    let zigzagMatrix = Array(numRows).fill().map(() => Array(s.length).fill(''));

    for (let i = 0; i < s.length; i++) {
        if (trendingDown) {
            goingDownCount++;
            zigzagMatrix[goingDownCount - 1][i] = s[i];
        }
        else {
            goingUpCount++;
            zigzagMatrix[(numRows - goingUpCount - 1) < 0 ? 0 : (numRows - goingUpCount - 1)][i] = s[i];

            if (goingUpCount === numRows - 2) {
                trendingDown = !trendingDown;
                goingUpCount = 0;
            }

            goingDownCount = 0;
        }

        if (goingDownCount % numRows === 0 && goingDownCount !== 0) {
            trendingDown = !trendingDown;
        }
    }

    return zigzagMatrix.map(row => row.join('')).join('');
};
