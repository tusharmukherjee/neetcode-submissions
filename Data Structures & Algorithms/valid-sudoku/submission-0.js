class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {

        // row check
        for( let i = 0; i<9; i++){
            let rowSet = new Set()
            for(let j = 0; j<9; j++){
                let value = board[i][j];
                if(value === ".") continue;
                if(rowSet.has(value)) return false;
                rowSet.add(value);
            }
        }

        // col check
        for(let i = 0; i<9; i++){
            let colSet = new Set();
            for(let j = 0; j<9; j++){
                let value = board[j][i]
                if(value === ".") continue;
                if(colSet.has(value)) return false;
                colSet.add(value);
            }
        }

        // 3x3 box check
        for(let i =0; i<9; i+=3){
            for (let j=0; j<9; j+=3){
                let boxSet = new Set();

                for(let row = i; row<i+3; row++){
                    for (let col = j; col<j+3; col++){
                        let value = board[row][col];
                        if(value === ".") continue;
                        if(boxSet.has(value)) return false;
                        boxSet.add(value);
                    }
                }

            }
        }

        return true;
    }
}
