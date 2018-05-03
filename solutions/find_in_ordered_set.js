// Suppose we had an array ↴ of nn integers sorted in ascending order. How quickly could we check if a given integer is in the array?

// Suppose we had an array ↴ of nn integers sorted in ascending order. How quickly could we check if a given integer is in the array?

//answer binary search with O (lg n) space O(1);

// function findInOrderedSet(nums, val)
// {
// 	let map = {};
// 	for (let i = 0; i < nums.length; i++)
// 	{
// 		map[nums[i]] = i;
// 	}

// 	for (num in map)
// 	{

// 		if (val === parseInt(num))
// 		{
// 			return true;
// 		}

// 	}
// 	return false;
// }


function findInOrderedSet(nums,target, floor,ceiling)
{
	let mid = Math.floor((floor + ceiling) /2);
	if (target === nums[mid])
	{
		return true;
	}
	else if (target < nums[mid])
	{
		ceiling = mid;
		return findInOrderedSet(nums, target, floor, ceiling);

	}
	else if (target > nums[mid])
	{
		floor = mid;
		return findInOrderedSet(nums, target, floor, ceiling - 1);
	}
	else
	{
		return false;
	}
}


const arr = [2,3,4,5,7,9];
const value = 8;
console.log(findInOrderedSet(arr, value, floor=-1, ceiling=arr.length));