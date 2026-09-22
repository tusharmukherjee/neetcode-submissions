class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let stack = [];
        let maxArea = 0;
        for(let i=0; i<heights.length; i++){
            while(stack.length && heights[i]<heights[stack[stack.length-1]]){
                let index = stack.pop();
                let height = heights[index];
                let width = stack.length
                            ? i - stack[stack.length - 1] - 1
                            : i;
                maxArea = Math.max(maxArea, height * width);
            }
            stack.push(i)
        }

        while(stack.length){
            let index = stack.pop();
            let width = stack.length
                ? heights.length - stack[stack.length - 1] - 1
                : heights.length;
            let height = heights[index];
            maxArea = Math.max(maxArea, height * width)
        }

        return maxArea;
    }
}
