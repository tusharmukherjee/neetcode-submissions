class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let stackArr = [];
        for(let i = 0; i<operations.length; i++){
            switch (operations[i]){
                case "+":
                    stackArr.push(stackArr[stackArr.length-1]+stackArr[stackArr.length-2]);
                    break;
                case "C":
                    stackArr.pop()
                    break;
                case "D":
                    stackArr.push(2*stackArr[stackArr.length - 1])
                    break;
                default:
                    stackArr.push(Number(operations[i]))

            }
        }
        return stackArr.reduce((sum, score) => sum + score, 0);
    }
}
