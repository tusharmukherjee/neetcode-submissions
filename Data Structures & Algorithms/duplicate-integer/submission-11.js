class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let arr = [];
        for(let i = 0; i<=nums.length-1; i++){
            if(arr[nums[i]] == nums[i]) return true;
            arr[nums[i]] = nums[i]
        }
        return false
        // let arr = new Set(nums);
        // if(arr.size != nums.length) return true
        // return false
    }
}
