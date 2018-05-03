//dependable
//divide and conquer
//uses recursion

//break into 2 lists 

const mergeSort = (nums) => 
{
	//base case recursive function 
	if (nums.length < 2)
	{
		return nums;
	}

	const length = nums.length;
	const mid = Math.floor(length/2);

	const left = nums.slice(0, mid);
	const right = nums.slice(mid, length);

	const sortedLeft = mergeSort(left);
	const sortedRight = mergeSort(right)

	return stitch(sortedLeft, sortedRight);
}

const stitch = (left, right) => 
{
	const results = [];

	//while (left.length <= 0 && right.length <= 0) // same as below
	while (left.length && right.length)
	{
		if (left[0] <= right[0])
		{
			results.push(left.shift()); //pop off front. 0 element of array
		}
		else 
		{
			results.push(right.shift()); //unshift pushes onto front
		}
	}

	//only one of these will work. the array with items left will be tacked
	//onto the end
	// while (left.length)
	// {
	// 	results.push(left.shift());
	// }
	// while (right.length)
	// {
	// 	results.push(right.shift());
	// }

	// return results;

	//es6 version. spread operator
	return [..results, ..left, ..right]
}

const nums = [10, 6,8, 3, 9, 2, 7]
console.log(mergeSort(nums))