function numberOfOnes2(arr)
{
	let start = 0;
	let end = arr.length -1;
	let mid;
	let index;
	while (start <= end)
	{
		//set mid to largest integer of (start + end / 2)
		mid = Math.floor((start + end) / 2);

		//if current mid is 1 AND integer to the left is 0
		if (arr[mid] === 1 && arr[mid - 1] === 0)
		{
			//set index to mid;
			index = mid;
		}
		// if current mid is 1
		if (arr[mid] === 1)
		{
			//set end to mid - 1 and set index to mid
			end = mid - 1;
			index = mid;
		}
		else 
		{
			//if current mid is not 1 then set str tot mid + 1
			start = mid + 1;
		}
	}
	
	//array is sorted. index is set to first 1 in array. returning the array
	//length - 1 (length of array) - index of first one returns the number of 1s in array. 
	return arr.length - index;
}

numberOfOnes2([0,0,0,1,1,1,1,1,1,1,1])
numberOfOnes2([0  ,1])


