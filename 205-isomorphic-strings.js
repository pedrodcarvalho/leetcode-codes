/**
 * Dificulty: Easy
 * Topics: Hash Table, String
 */

const isIsomorphic = (s, t) => {
    const hashTable = { s: {}, t: {} };

    for (let i = 0; i < s.length; i++) {
        if ((hashTable.s[s[i]] !== t[i] && hashTable.s[s[i]] !== undefined) || (hashTable.t[t[i]] !== s[i] && hashTable.t[t[i]] !== undefined)) {
            return false;
        }

        hashTable.s[s[i]] = t[i];
        hashTable.t[t[i]] = s[i];
    }

    return true;
};
