class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        for(let i = 0; i<nums.length; i++){
            let left = i+1;
            let right = nums.length-1;
            let temp = target - nums[i]
            while(left<=right){
                let mid = Math.floor((left + right) / 2);
                if(nums[mid] === temp){
                    return [i+1, mid+1];
                } else if (nums[mid] < temp){
                    left = mid+1;
                } else {
                    right = mid -1;
                }
            }
        }
        return []
    }
}
