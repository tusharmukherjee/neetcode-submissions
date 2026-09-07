class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let numSet = new Set(nums);
        let maxStreak = 0;
        for (let num of nums){
            let currStreak = 1
            if(!numSet.has(num-1)){
                while(numSet.has(num+1)){
                  currStreak++;
                  num = num + 1;
                }
            }
            maxStreak = Math.max(maxStreak, currStreak)
        }
        return maxStreak;
    }
}