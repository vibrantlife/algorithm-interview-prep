// The 2-player game of Drawdown is played with N groups of stones. There is a group of stones belonging to player 1 at index 0, a group of stones belonging to player 2 at index N - 1, and groups of stones at indices [1..N-2] that have no specific owner.
// At the start of each game a set of size k containing all valid moves is presented. Moves can be re-used. Each move is represented by an array of N integers, with each integer representing the number of stones at the corresponding position the move adds or removes from the collection. All moves are guaranteed to reduce the total number of stones, even though they may increase the number of stones within an individual group. A move can no longer be performed if doing so would reduce the number of stones in any group below 0.
// After no more moves can be completed, the player with the greater number of their own stones remaining is declared the victor. If both players have the same number of stones, then player 2 wins. 

// Example: Let's say the game begins with a board of [6, 4, 2, 4]. These are the available moves provided:
// 1. [-2, -2, 1, 0]
// 2. [-4, -4, 0 ,0]
// 3. [0, 0, -2, -2]

// Player One: 3, Player Two: 2

// Initial board: [6, 4, 2, 4]
// Player 1 performs move 1. New board: [4, 2, 3, 4]
// Player 2 can either perform move 1 or move 3. They decide to perform move 1. New board: [2, 0, 4, 4]
// Player 1 performs move 3 (which is the only move available). New board: [2, 0, 2, 2]
// Player 2 is now forced to perform move 3. New board: [2, 0, 0, 0]
// The game is now over and player 1 is the winner.


// var _ = require('underscore');

//given a board and assuming it is the end of the game. return the victor

// output is 2 numbers

function checkWinner(arr)
{
  
  //player 1 is arr[0]; player2 is arr[arr.length - 1]
  let player_1 = arr[0];
  let player_2 = arr[arr.length - 1];
  
  if (player_1 > player_2)
  {
    return 1; 
  }
  else
  {
    return 2;
  }
  
}

let gameCount = 0;

function playGame(board, move1, move2, move3)
{
  let updatedBoard = [];
  console.log(gameCount);
  gameCount++;
  for (let i = 0; i < board.length; i++)
  {
      let newBoardVal = board[i] + move1[i];
      updatedBoard.push(newBoardVal);
    if (newBoardVal < 0 )
    {
      if (checkWinner(board) === 1)
      {
        return [1, 0];
      }
      else 
      {
        return [0, 1];
      }
    }  
  }  

  let game1Result = playGame(updatedBoard, move1, move2, move3);
  let game2Result = playGame(updatedBoard, move2, move3, move1);
  let game3Result = playGame(updatedBoard, move3, move1, move2);
  let game4Result = playGame(updatedBoard, move1, move3, move2);
  let game5Result = playGame(updatedBoard, move3, move2, move1);
  let game6Result = playGame(updatedBoard, move2, move1, move3);

  let player1Result = game1Result[0] + game2Result[0] + game3Result[0] + game4Result[0] + game5Result[0] + game6Result[0];

  let player2Result = game1Result[1] + game2Result[1] + game3Result[1] + game4Result[1] + game5Result[1] + game6Result[1]

  return [player1Result, player2Result];
}






const newboard = [6, 4, 2, 4];
const move_1 = [-2, -2, 1, 0];
const move_2 = [-4, -4, 0 ,0];
const move_3 = [0,0,-2,-2];

console.log(playGame(newboard, move_1, move_2, move_3));