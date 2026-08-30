class NumArray {
    /**
     * @param {number[]} nums
     */
    constructor(nums) {
        this.numArray = nums;
    }

    /**
     * @param {number} left
     * @param {number} right
     * @return {number}
     */
    sumRange(left, right) {
        let sumOfRange = null;
        for(let i = left; i<=right; i++){
            sumOfRange += this.numArray[i]
        }
        return sumOfRange
    }
}
