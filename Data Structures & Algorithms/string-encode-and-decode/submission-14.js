class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if(strs.length === 0) return "false"
        let appendStr = strs.map((el) => {
            return el.length+"&"+el
        })
        return appendStr.join("");
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
    if (str === "false") return [];

    let result = [];
    let i = 0;

    while (i < str.length) {
        let j = i;

        // Find &
        while (str[j] !== "&") {
            j++;
        }

        // Everything between i and j is the length
        let length = Number(str.slice(i, j));

        let concatString = "";

        for (let k = j + 1; k < j + 1 + length; k++) {
            concatString += str[k];
        }

        result.push(concatString);

        i = j + 1 + length;
    }

    return result;
}
}
