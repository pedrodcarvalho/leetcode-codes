/**
 * Dificulty: Easy
 * Topics: String, Trie
 */

const longestCommonPrefix = (strs) => {
    if (strs.length === 1) {
        return strs[0];
    }

    if (strs.length === 0 || strs.some((str) => str.length === 0)) {
        return '';
    }

    const trie = {};
    let prefix = '';

    for (let str of strs) {
        let node = trie;

        for (let char of str) {
            if (!node[char]) {
                node[char] = {};
            }

            node = node[char];
        }

        node['*'] = null;
    }

    let node = trie;

    while (Object.keys(node).length === 1 && node['*'] !== null) {
        const char = Object.keys(node)[0];
        prefix += char;
        node = node[char];
    }

    return prefix;
};
