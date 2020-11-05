var gameOfLife = function(board) {
    let liveNeighbors;
    let cell;
    let neighbor;
    
    let rows = board.length;
    let cols = board[0].length;
    
    let copyBoard = [];
    
    for(let i = 0; i < rows; i++) {
        let row = []
        for(let j = 0; j < cols; j++) {
            row.push(board[i][j]);
        }
        copyBoard.push(row);
    }
    
    //for each board cell
    for(let row = 0; row < rows; row++) {
        for(let col = 0; col < cols; col++) {
            cell = copyBoard[row][col];
            //for each cell neighbor
            liveNeighbors = 0;
            for(let i = row-1; i <= row+1; i++) {
                for(let j = col-1; j <= col+1; j++) {
                    
                    if(!(i === row && j === col)) {
                        //if on an edge, continue
                        if((i < rows && i >= 0)  && (j < cols && j >= 0) && copyBoard[i][j] === 1) {
                            liveNeighbors++;
                        } 
                    }
                }
            }
            //determine if cell is alive
            if(cell === 1) {
                //cell dies due to under-population or over-population
                if(liveNeighbors < 2 || liveNeighbors > 3) {
                    board[row][col] = 0;
                }
            } else {
                //dead cell is 
                if(liveNeighbors === 3) {
                    board[row][col] = 1;
                }
            }
        }
    }
};

let board = [ [0, 1, 0],
              [0, 0, 1],
              [1, 1, 1],
              [0, 0, 0] ]

gameOfLife(board);

console.log(board);