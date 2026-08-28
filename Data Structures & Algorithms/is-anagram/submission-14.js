class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false

        const charCount = {}

        for (const i of s){
            charCount[i] = (charCount[i] || 0) + 1
        }

        for (const i of t) {
            if (!charCount[i]) return false
            charCount[i]--
        }

        return true
    }
}
