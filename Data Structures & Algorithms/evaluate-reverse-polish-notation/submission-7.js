class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let stack = [];
        for(let i = 0; i<tokens.length; i++){
            if(!isNaN(Number(tokens[i]))){
                stack.push(parseInt(tokens[i]))
            } else {
                let b = stack.pop();
                let a = stack.pop();
                switch(tokens[i]){
                    case "+":
                        stack.push(a+b);
                        break;
                    case "-":
                        stack.push(a-b);
                        break;
                    case "*":
                        stack.push(b*a);
                        break;
                    case "/":
                        stack.push(Math.trunc(a/b));
                        break;
                }
            }
        }
        return stack[0]
    }
}
