const binaryMatrix = [[0, 1, 0, 1, 0],
					  [0, 0, 1, 1, 1],
					  [1, 0, 0, 1, 0],
					  [0, 1, 1, 0, 0],
					  [1, 0, 1, 0, 1]];


					  // [[0, 1, 0, X, 0],
					  // [0, 0, X, 1, 1],
					  // [1, 0, 0, X, 0],
					  // [0, 1, 1, 0, 0],
					  // [1, 0, X, 0, 1]];


function islandCount(matrix) {
	let result = 0;
	//track location 
	let dict = {};

	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix.length; j++) {
			let current = matrix[i][j]
			if (current === 1) {
				//add to dict 
				//top matrix[i + 1][j] === 1
				//bottom matrix[i - 1][j] === 1;
				//left matrix[i][j - 1];
				//right matrix[i][j + 1]
					//if any are 1, add to dict
					//else increment result;

				dict[current] = 1;
				if ((j > 0 && i <= matrix.length - 2)&& matrix[i + 1][j] === 1) {
					dict[matrix[i + 1][j]] = 1;
				}
				if (i > 0 && matrix[i - 1][j] === 1) {
					dict[matrix[i - 1][j]] = 1;
				}
				if ((j > 0 && i <= matrix.length - 2) && matrix[i][j + 1] === 1) {
					dict[matrix[i][j + 1]] = 1;
				}
				if (i > 0 && matrix[i][j - 1] === 1) {
					dict[matrix[i][j - 1]] = 1;
				}
				else {
					console.log('i: ' + i + ' j: ' + j)
					result ++;
				}

			}


		}
	}
	console.log('result ' + result)
	console.log(dict)
}

console.log(islandCount(binaryMatrix));


//try recursion blekh 
