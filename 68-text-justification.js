/**
 * Dificulty: Hard
 * Topics: Array, String, Simulation
 */

const fullJustify = (words, maxWidth) => {
    const separatedWords = [];
    let currentWidth = 0;
    let currentLine = [];

    for (let i = 0; i < words.length; i++) {
        currentLine.push(words[i]);
        currentWidth += words[i].length + 1;

        if (currentWidth > maxWidth + 1) {
            currentLine.pop();
            currentWidth -= words[i].length + 1;

            separatedWords.push(currentLine);

            currentLine = [words[i]];
            currentWidth = words[i].length + 1;
        }

        if (i === words.length - 1) {
            separatedWords.push(currentLine);
        }
    }

    for (let i = 0; i <= separatedWords.length - 1; i++) {
        const line = separatedWords[i];
        const lineLength = line.reduce((acc, word) => acc + word.length, 0);
        const spaces = maxWidth - lineLength;
        const spacesPerWord = Math.floor(spaces / (line.length - 1));
        const extraSpaces = spaces % (line.length - 1);

        for (let j = 0; j < line.length - 1; j++) {
            if (i === separatedWords.length - 1) {
                line[j] += ' ';
                continue;
            }

            line[j] += ' '.repeat(spacesPerWord);

            if (j < extraSpaces) {
                line[j] += ' ';
            }
        }

        separatedWords[i] = line.join('');

        if (line.length === 1) {
            separatedWords[i] += ' '.repeat(maxWidth - line[0].length);
        }
    }

    separatedWords[separatedWords.length - 1] += ' '.repeat(Math.max(0, maxWidth - separatedWords[separatedWords.length - 1].length));

    return separatedWords.filter((line) => line.length > 0);
};
