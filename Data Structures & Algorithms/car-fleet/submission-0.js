class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let sortedPosition = position.map((element, index) => {
            return [element, speed[index]]
        }).sort((a,b) => b[0]-a[0]);

        let stack = [];

        for(let i=0; i<sortedPosition.length; i++){
            let timeToReach = (target - sortedPosition[i][0]) / sortedPosition[i][1]
            if(!stack.length){
                stack.push(timeToReach);
                continue;
            } else if(timeToReach > stack[stack.length-1]) {
                stack.push(timeToReach)
            }
        }

        return stack.length;
    }
}
