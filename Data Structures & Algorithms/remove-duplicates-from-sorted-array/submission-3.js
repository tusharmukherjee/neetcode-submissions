class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let left = 0;
        let right = 1;
        let k = 1;
        if(nums.length === 0) return 0
        while(right<nums.length){
            if(nums[left] != nums[right]){
                left = right;
                right++;
                k++;
                continue;
            }else if(nums[left] == nums[right]){
                nums.splice(right,1)
            }
        }
        return k;
    }
}
