class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        let merged = [...nums1, ...nums2];
        let sortMerged = merged.sort((a,b) => a-b);
        const n = sortMerged.length;

        if(n % 2 === 1){
            return sortMerged[Math.floor(n/2)];
        } else {
            return (
                sortMerged[n / 2 - 1] +
                sortMerged[n / 2]
            ) / 2;
        }
    }
}
