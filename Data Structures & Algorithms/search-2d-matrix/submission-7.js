class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let leftBig = 0;
        let rightBig = matrix.length-1;
        while(leftBig<=rightBig){
            let midBig = Math.floor(leftBig+(rightBig-leftBig)/2);
            if(target < matrix[midBig][0]){
                    rightBig = midBig - 1
            } else if (target > matrix[midBig][matrix[midBig].length-1]) {
                    leftBig = midBig + 1;
            } else {
                let left = 0;
                let right = matrix[midBig].length - 1;

                while (left <= right) {
                    let mid = Math.floor(left + (right - left) / 2);

                    if (matrix[midBig][mid] === target) {
                        return true;
                    } else if (target < matrix[midBig][mid]) {
                        right = mid - 1;
                    } else {
                        left = mid + 1;
                    }
                }

                return false;
            }
        }
        return false;
    }
}
