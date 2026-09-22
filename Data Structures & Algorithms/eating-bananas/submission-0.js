class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let left = 1;
        let right = Math.max(...piles);
        let maxRate = right;

        while(left<=right){
            const mid = Math.floor((left+right)/2)

            let totalTime = 0;
            for(const p of piles) {
                totalTime += Math.ceil(p/mid)
            }
            if(totalTime <= h){
                maxRate = mid;
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return maxRate;
    }
}
