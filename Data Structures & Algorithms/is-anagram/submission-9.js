class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const ss = s.split("").sort().join("")
        const tt = t.split("").sort().join("")
        if (ss === tt){
            return true
        }else{
            return false
        }
    }
}
