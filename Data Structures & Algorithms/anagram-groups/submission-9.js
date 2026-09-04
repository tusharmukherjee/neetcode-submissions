class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const hashMap = new Map();
        const groupArr = [];

        for (let i = 0; i < strs.length; i++) {
            const hash = new Array(26).fill(0);

            for (const char of strs[i]) {
                const hashIndex = char.charCodeAt(0) - 97;
                hash[hashIndex]++;
            }

            const key = hash.join("#");

            const alreadyPresent = hashMap.get(key) || [];
            hashMap.set(key, [...alreadyPresent, strs[i]]);
        }

        // for (const [, eachArr] of hashMap.entries()) {
        //     groupArr.push(eachArr);
        // }
        return [...hashMap.values()]
        return groupArr;
    }
}
