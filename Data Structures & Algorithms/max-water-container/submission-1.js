class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(nums) {
        let left = 0;
        let right = nums.length-1;
        let maxArea = 0;
        while(left<right){
            let currWidth = right-left;
            let currHeight = Math.min(nums[left],nums[right]);
            maxArea = Math.max(maxArea, currWidth*currHeight);
            if(nums[left]>nums[right]){
                right--
            } else {
                left++
            }
        }
        return maxArea
    }
}
