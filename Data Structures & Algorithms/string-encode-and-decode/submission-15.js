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
        if(str === "false") return []
        let returnDecodedArr = []
        for(let i = 0; i<str.length; i++){
            let concatString = "";
            let j = i;
            
            while(str[j] != "&"){
                j++;
            }

            let length = Number(str.slice(i,j))

            for(let k = j+1; k < j+1+length; k++){
                concatString += str[k]
            }
            returnDecodedArr.push(concatString)
            i = j + length;
        }
        return returnDecodedArr;
    }
}
