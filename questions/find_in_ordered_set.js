// Suppose we had an array ↴ of nn integers sorted in ascending order. How quickly could we check if a given integer is in the array?

function findInOrderedSet(nums, val)
{
	let map = {};
	for (let i = 0; i < nums.length; i++)
	{
		map[nums[i]] = i;
	}

	for (num in map)
	{
		if (val === parseInt(num))
		{
			return true;
		}
		else 
		{
			return false;
		}
	}
}

const arr = [2,3,4,5,7,9];
const value = 5;
findInOrderedSet(arr, value);