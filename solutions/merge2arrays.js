// Given a package with a weight limit limit and an array arr of item weights, implement a function getIndicesOfItemWeights that finds two items whose sum of weights equals the weight limit limit. Your function should return a pair [i, j] of the indices of the item weights, ordered such that i > j. If such a pair doesn’t exist, return an empty array.

// const getIndicesOfItemWeights = (input, limit) =>
// {
// 	let map = {};

// 	if (input.length < 2)
// 	{
// 		return [];
// 	}
// 	if (input.length === 2 && (input[0] === input[1]))
// 	{
// 		return [1, 0];
// 	}

// 	for (let i = 0; i < input.length; i++)
// 	{
// 		map[input[i]] = i;
// 	}

// 	for (val in map)
// 	{
// 		let complement = map[limit - val];

// 		if (complement != null)
// 		{
// 			return [map[val], complement].sort().reverse();
// 		}
// 	}
// }



// const array = [5, 10, 16, 4, 15];
// const target = 21;

// console.log(getIndicesOfItemWeights(array, target));


//given solution 
function getIndicesofItemWeights(arr, limit) {
  // your code goes here
  let map = {};
  
  if (arr.length < 2)
    {
      return [];
    }
  for (let i = 0; i < arr.length; i++)
    {
      let current = arr[i];
      let complement = map[limit - current];
      
      if (complement != null)
        {
          return [i, complement];
        }
      else
        {
          map[arr[i]] = i;
        }
    }
}

const arr = [5, 10, 16, 4, 15];
const num = 21;

console.log(getIndicesofItemWeights(arr, num));


