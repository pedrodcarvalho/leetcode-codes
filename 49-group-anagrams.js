/**
 * Dificulty: Medium
 * Topics: Array, Hash Table, String, Sorting
 */

const groupAnagrams = (strs) => {
    let strsSorted = strs.sort().map(str => {
        return {
            original: str,
            sorted: str.split('').sort().join('')
        };
    }).sort((a, b) => {
        return a.sorted > b.sorted ? 1 : -1;
    }).reduce((acc, curr, i) => {
        if (i === 0) {
            acc.push([curr.original]);
        }
        else if (curr.sorted === acc[acc.length - 1][0].split('').sort().join('')) {
            acc[acc.length - 1].push(curr.original);
        }
        else {
            acc.push([curr.original]);
        }

        return acc;
    }, []);

    return strsSorted;
};
