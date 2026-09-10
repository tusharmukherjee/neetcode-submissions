class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let left = 0;
        let right = nums.length-1;
        let finalArr = [];
        nums = nums.sort((a,b) => a-b)
        for(let i = 0; i<nums.length; i++){
            left = i+1;
            right = nums.length-1;
            if (i > 0 && nums[i] === nums[i - 1]) {
                continue;
            }
            while(left<right){
                let sum = nums[i] + nums[left] + nums[right];
                if(sum === 0){
                    finalArr.push([nums[i],nums[left],nums[right]])
                    left++;
                    right--;
                    while(left<right && nums[left] == nums[left-1]){
                        left++;
                    }
                    while(left<right && nums[right] == nums[right+1]){
                        right--;
                    }
                } else if (sum<0){
                    left++;
                } else {
                    right--;
                }
            }
        }
        return finalArr;
    }
}
