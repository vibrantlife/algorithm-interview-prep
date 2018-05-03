//divide and conquer AKA recursive 
//Big O of (n log n)

  // Quicksort should grab a pivot from the end and then separate the list (not including the pivot)
  // into two lists, smaller than the pivot and larger than the pivot. Call quickSort on both of those lists independently. Once those two lists come back sorted, concatenate the "left" (or smaller numbers)
  // list, the pivot, and the "right" (or larger numbers) list and return that. The base case is when quickSort
  // is called on a list with length less-than-or-equal-to 1. In the base case, just return the array given.

const quickSort = (nums) => 
{
	//base case 
	if (nums.length <= 1) return nums;

	let end = nums[nums.length - 1];
	let left = [];
	let right = [];

	for (let i = 0; i < nums.length - 1; i++)
	{
		if (nums[i] < end)
		{
			left.push(nums[i]);
		}
		else 
		{
			right.push(nums[i]);
		}
	}

	// return quickSort(left.concat(end, quickSort(right)));
	return [...quickSort(left), end, ...quickSort(right)];
}


const nums = [3, 6, 2, 1, 9, 5];

console.log(quickSort(nums));