// Write a program to solve a Sudoku puzzle by filling the empty cells.

// Empty cells are indicated by the character '.'.

// You may assume that there will be only one unique solution.

// https://leetcode.com/problems/sudoku-solver/description/

var sudokuBoard = [
[".",".","9","7","4","8",".",".","."],
["7",".",".",".",".",".",".",".","."],
[".","2",".","1",".","9",".",".","."],
[".",".","7",".",".",".","2","4","."],
[".","6","4",".","1",".","5","9","."],
[".","9","8",".",".",".","3",".","."],
[".",".",".","8",".","3",".","2","."],
[".",".",".",".",".",".",".",".","6"],
[".",".",".","2","7","5","9",".","."]];

var solveSudoku = function(board) {
	solveHelper(0, 0, board);
	console.log(board)
};

var solveHelper = function(row, col, board) {
	for (var i = 0; i < board.length; i++) {
		for (var j = 0; j < board.length; j++) {
			//if the space on the board is empty
			if (board[i][j] === '.') {
				//loop through the options the value can be 1-9
				for (let n = 1; n <= 9; n++) {
					//convert value to string 
					let nString = n.toString();
					//check if the number 
					//isValid(row, col, board, target) will return true or false;
					if(isValid(i, j, board, nString)) {
						//set value on board to the valid number
						board[i][j] = nString;
						//attempt to solve board. if it can be solved, return true. if it cannot be solved. set value to blank 
						if (solveHelper(row, col, board)) {
							return true;
						}
						board[i][j] = '.';
					}
				}
				return false;
			}
		}
	}
	return true;
}

var isValid = function(row, col, board, target) {
	//check if value is in the row
	for (let r = 0; r < board.length; r++) {
		//if value on board in this row at this position is the target num then return false;
		if (board[row][r] === target) {
			return false;
		}
	}

	//check if value is in the column
	for (let c = 0; c < board.length; c++) {
		//if value on bard in this column at this position is the target num then return false
		if (board[c][col] === target) {
			return false;
		}
	}

	//check if value is in the 3*3 grid 
		//x and y denote starting point to search for value. rows and columns to look in will be 0-2, 3-5, or 6-8. 
		//divide row by column to get either 0, 1, 2 then multiple by 3
			//ex: row = 1
				//1/3 = 0.3. in Math.floor that's 0. 0*3 = 0. range will be 0-2 
	let x = Math.floor(row/3) * 3;
	let y = Math.floor(col/3) * 3;

	for (let g = x; g < x + 3; g++) {
		for (let h = y; h < y + 3; h++) {
			//if value in 3*3 grid is equal to the target return false
			if(board[g][h] === target) {
				return false;
			}
		}
	}
	//if value passsed all checks then return true;
	return true;
}

solveSudoku(sudokuBoard);



/*

from pramp code






const testBoard = [[5,3,'.','.',7,'.','.','.','.'],
                  [6,'.','.',1,9,5,'.','.','.'],
                  ['.',9, 8,'.','.','.','.',6,'.'],
                  [8, '.', '.','.',6,'.','.','.',3],
                  [4,'.','.',8,'.',3,'.','.',1],
                  [7,'.','.','.',2,'.','.','.',6],
                  ['.',6,'.','.','.','.',2,8,'.'], 
                  ['.','.','.',4,1,9,'.','.',5],
                  ['.','.','.','.',8,'.','.',7,9]]



function sudokuSolve(board) {
  if (board === null || board.length !== 9 || board[0].length !== 9) {
    return;
  }
  
  return solveHelper(board,0, 0);
}

function solveHelper(board, row, col) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      //check if board is .
        //if it is return true
        if (board[i][j] === '.') {
          //loop through 1-9
          //if isValid is true
            //board[i][j] = k;
          for (let k = 1; k <=9; k++) {
            let kstring = k.toString()
            if (isValid(board, i, j, kstring)) {
              board[i][j] = kstring;
               if (solveHelper(board, row, col)) {
                 return true;
               }
              board[i][j] = '.';
            }
            
          }
          return false;
        }
    }
  }
  return true;
}

function isValid(board, row, col, target) {
  //check row and column 
  for (let i = 0; i < 9; i++) {
    if(board[row][i] === target) {
      return false;
    }
  }
  
  for (let c = 0; c < 9; c++) {
    if (board[c][col] === target) {
      return false;
    }
  }
  
  //check 3*3
  let x = Math.floor(row / 3) * 3;
  let y = Math.floor(col / 3) * 3;
  for (let i = x; i< x +3 ; i++) {
    for (let j = y; j < y+3 ; j++) {
        //console.log(board[i][j])
        if (board[i][j] === target) {
          return false;
        }
    }
  }
  return true
    
}

console.log(sudokuSolve(test));







