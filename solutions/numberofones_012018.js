function numberOfOnes(arr)
{
	let start;
	let len = arr.length;

	for (var i = 0; i < len; i++)
	{
		if (arr[i] === 1)
		{
			start = i;
			// console.log(start);
			break;
		}
	}
	return len -  start
}

// numberOfOnes([0,0,0,1,1,1,1,1,1,1,1]);

function numberOfOnes2(arr)
{
	let start = 0;
	let end = arr.length -1;
	let mid;
	let index;
	while (start <= end)
	{
		mid = Math.floor((start + end) / 2);

		console.log('mid ' +mid);
		if (arr[mid] === 1 && arr[mid - 1] === 0)
		{
			index = mid;
		}
		if (arr[mid] === 1)
		{
			end = mid - 1;
			index = mid;
		}
		else 
		{
			start = mid + 1;
		}
	}
	console.log(arr.length - index)
	return arr.length - index;
}

// numberOfOnes2([0,0,0,1,1,1,1,1,1,1,1])
// numberOfOnes2([0  ,1])


function ArrayMatching(strArr)
{

	console.log(strArr);
}

ArrayMatching()

