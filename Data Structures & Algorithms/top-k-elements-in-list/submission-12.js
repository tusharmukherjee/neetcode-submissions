class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const hashMap = new Map();
        for(let i of nums){
            if(!hashMap.has(i)){
                hashMap.set(i,1)
            } else {
                let getCount = hashMap.get(i)
                hashMap.set(i,++getCount)
            }
        }
        return [...hashMap.entries()].sort((a,b)=>b[1]-a[1]).slice(0,k).map((el)=>el[0])
    }
}