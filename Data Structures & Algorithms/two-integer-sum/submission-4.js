class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let hashMap = new Map();
        for(let i=0; i<nums.length; i++){
            let uniqueInteger = target-nums[i];
            let j = hashMap.has(nums[i]);
            if(j) return [hashMap.get(nums[i]),i]
            hashMap.set(uniqueInteger, i);
        }
    }
}
