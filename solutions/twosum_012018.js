function twoSum(numbers, target)
{
	let hash = {};
	let current;

	for (let i = 0; i < numbers.length; i++)
	{
		current = numbers[i];
		if (hash[current]) {return true;}
		hash[target - current] = true;
	}
	return false;
}

console.log(twoSum([4,2,6,5,7,9,10], 13))




/*

// Given a target and an array of integers
// find all the pairs in the array whose product equals the target

// productPairs(6, [1, 2, 3, 6])
// < [[1, 6], [2, 3]]

let target = 6;
let sample = [1, 2, 3, 6];

function productPairs(val, arr) {
  let map = {};
  let result =[];
  
  for (let i = 0; i < arr.length; i++) {
    map[arr[i]] = arr[i]; 
  }
  
  for (let i = 0; i < arr.length; i++) {
    //if map[arr[i]] * arr[i] === target add to result;

    if (map[val/arr[i]]) {
      
       result.push([map[val/arr[i]], arr[i]])
    }
    
    
  }
                    
  return result;
}

console.log(productPairs(target, sample));