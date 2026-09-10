class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        if (nums.length <= 2) return nums.length;
        let left = 2;
        let right = nums.length-1;
        let kLength = 2;
        while(left <= right){
            if(nums[left] != nums[kLength-2]){
                nums[kLength] = nums[left];
                kLength++;
            }
            left++;
        }
        return kLength;
    }
}
