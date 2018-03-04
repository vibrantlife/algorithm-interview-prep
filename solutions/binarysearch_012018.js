function binarySearch(arr, target)
{
	//define start at 0. end at end of arry, and mid as undefined
	let start = 0;
	let end = arr.length - 1;
	let mid;

	//run loop as long as start <= end
	while (start <= end)
		{
			//mid = rounds up (start + end/2)
			mid = Math.floor((start + end) / 2);

			//if current middle is the target number
			if (arr[mid] === target)
			{
				//return mid
				return mid;
			}
			//if target is less than current middle
			if (target < arr[mid])
			{
				//set end = current middle - 1
				end = mid - 1;
			}
			else 
			{
				//set start to current middle + 1
				start = mid + 1;
			}
		}
		//if target does not equal current middle then return -1
		return -1;
}

binarySearch([1,3,4,5,6,7,8,10,11,13,15,17,20,22], 17)