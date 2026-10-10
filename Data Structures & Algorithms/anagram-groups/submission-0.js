class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

const res = {};
for (let i = 0; i < strs.length; i++) {
    const s = strs[i];
    const count = new Array(26).fill(0);
    for (let j = 0; j < s.length; j++) {
        const c = s[j];
        const charCode = c.charCodeAt(0) - 'a'.charCodeAt(0);
        count[charCode]++;
    }
    const key = count.join(',');
    if (!res[key]) {
        res[key] = [];
    }
    res[key].push(s);
}
return Object.values(res);
    }
}
