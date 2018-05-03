// function numOfPathsToDest(n) {
//   // your code goes here
  
//   //counter for paths
//   let counter = 0;
//   let matrix = [];
  
//   for (let i = 0; i < n; i++)
//     {
//         matrix.push([]);
//       //push in - for spaces where car can move 
//        for (let j = 0; j < n; j++)
//          {
//            //if j = 0, matrix[i][j] = 1;
           
//            if (i >= j)
//              {
//                if (j === 0)
//                {
//                  matrix[i][j] = 1
//                }
//                else 
//                {
//                  matrix[i][j] = '-';
               
//                }
//              }
//            else 
//              {
//                matrix[i][j] = 0;
//              }
//          }
       
//     }//matrix[i - 1][j] + matrix[i][j - 1]
//   for (let i = 0; i < matrix.length; i++)
//     {
//       for (let j = 0; j < matrix.length; j++)
//         {
//          if (matrix[i][j] === '-')
//            {
//              matrix[i][j] = matrix[i - 1][j] + matrix[i][j-1];
//            }
//         }
//     }
//   return matrix[n-1][n-1];
  
// }



// This solution is very close to ours!
function numOfPathsToDest(n){
    // allocate a 2D array for memoization
    let memo = new Array(n)
    for(let i=0; i<n; i++){
      memo[i]=(new Array(n))
      memo[i][0]=1
    }

    for(let i=0; i<n; i++){
      for(let j=1; j<n; j++){
        if(i<j){
          memo[i][j]=0
        }else if(j<=i){
          memo[i][j]= memo[i-1][j] +memo[i][j-1]
        }
      }
    }
    console.log(memo[n-1][n-1]);
    
  return memo[n-1][n-1]

}




/*

RECURSIVE SOLUTION 

function numOfPathsToDest(n){
    // allocate a 2D array for memoization
    let memo = new Array(n)
    for(let i=0; i<n; i++){
      memo[i]=(new Array(n))
    }
    // the memoization array is initialized with -1
    // to indicate uncalculated squares.
    for (let i=0; i<=n-1; i++)
        for (let j = 0; j<=n-1; j++)
            memo[i][j] = -1

    return numOfPathsToSquare(n-1, n-1, memo)
}

/*
 input:
    i, j - a pair of non-negative integer coordinates
    memo - a 2D memoization array.
 output:
    number of paths from (0,0) to the square represented in (i,j),
*/
/*
function numOfPathsToSquare(i, j, memo){
    if (i < 0 || j < 0)
        return 0
    else if (i < j)
        memo[i][j] = 0
    else if (memo[i][j] != -1)
        return memo[i][j] 
    else if (i==0 && j == 0)
        memo[i][j] = 1
    else{
        memo[i][j] = numOfPathsToSquare(i, j -1, memo) +
        numOfPathsToSquare(i - 1, j, memo)
    }
    return memo[i][j]
}
*/

/*

n=1
output=1

n=2
output=1

n=3
output=2

n=4
output=5

n=5
output=14
   0 1 2  
0  1 0 0  
1  1 1 0  
2  1 2 2
return matrix[lastrow][lastcol]
  
/*










// IGNORE THIS SOLUTION 
    
// function numOfPathsToDest(n) {
//   // your code goes here
//   if(n==1) return 1
  
//   let lastRow = []
//   for(let i=1; i<=n-1; i++){
//     lastRow[i] = 1
//   }
  
//   let currentRow=[]
//   for(let j=1; j<=n-1; j++){
    
//     for(let i=j; i<=n-1; i++){
//       if(i==j){
//         currentRow[i]=lastRow[i]
//       }
//       else{
//         currentRow[i]=currentRow[i-1] + lastRow[i]
//       }
//     }
    
//     lastRow = currentRow
//   }
//   console.log(currentRow, lastRow)
  
//   return currentRow[n-1]
// }



*/
numOfPathsToDest(3);