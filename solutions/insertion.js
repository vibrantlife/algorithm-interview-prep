//good for arrays where you think it is partially sorted
//if not sorted at all - becomes problematic

//O(n^2)

const insertionSort = (nums) => 
{
	for (let i  = 1; i < nums.length; i++)
	{
		for (let j = 0; j < i; j++)
		{
			if (nums[i] < nums[j])
			{
				//destructive method. remove 1 element
				//remove item at index i
				const spliced = nums.splice(i, 1);
				//insert item at spot in arr
				nums.splice(j, 0, spliced[0]);
			}
		}
	}
	return nums;
}

console.log(insertionSort([5,2,6,1]));