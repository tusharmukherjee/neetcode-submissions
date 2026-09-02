class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let leftMul = 1;
        let result = [];

        for (let i = 0; i<nums.length; i++){
            result[i] = leftMul;
            leftMul *= nums[i];
        }

        let rightMul = 1;
        for(let i = nums.length-1; i>=0; i--){
            result[i] *= rightMul;
            rightMul *= nums[i]
        }
        return result
    }
}
