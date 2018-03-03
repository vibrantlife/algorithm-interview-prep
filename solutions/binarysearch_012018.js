function binarySearch(arr, target)
{
	let start = 0;
	let end = arr.length - 1;
	let mid;

	while (start <= end)
		{
			mid = Math.floor((start + end) / 2);
			// console.log('mid' + ' ' + mid)
			// console.log(start)
			if (arr[mid] === target)
			{
				return mid;
			}
			if (target < arr[mid])
			{
				end = mid - 1;
			}
			else 
			{
				start = mid + 1;
			}
		}
		return -1;
}

binarySearch([1,3,4,5,6,7,8,10,11,13,15,17,20,22], 17)