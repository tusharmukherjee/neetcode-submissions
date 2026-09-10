class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(nums) {
        let left = 0;
        let right = nums.length-1;
        let totalWater = 0;
        let leftMax = 0;
        let rightMax = 0;
        while(left<right){
            if(nums[left] < nums[right]){
                leftMax = Math.max(leftMax, nums[left]);
                totalWater += leftMax - nums[left];
                left++;
            }else {
                rightMax = Math.max(rightMax, nums[right])
                totalWater += rightMax - nums[right];
                right--;
            }
        }
        return totalWater;
    }
}
