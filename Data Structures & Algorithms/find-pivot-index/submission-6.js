class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    pivotIndex(nums) {
        [0,6,11,17,20,27,28]


        let totalSum = 0
        nums.forEach((item)=>{
            totalSum += item;
        })

        let leftSum = 0;

        for(let [index, item] of nums.entries()){
            let rightSum = totalSum - leftSum - item
            if(rightSum === leftSum) return index
            leftSum += item
        }

        return -1
    }
}
