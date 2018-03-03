function sortBitArray(arr)
{
	let bitCount = [0, 0];
	for (var i = 0; i < arr.length; i++)
	{
		if (arr[i] === 0)
		{
			bitCount[0] += 1;
		}
		else 
			bitCount[1] += 1;
	}

	arr.fill(0, 0, bitCount[0]);
	arr.fill(1, bitCount[0], arr.length)
	console.log(arr);
}

sortBitArray([0, 1, 1, 0, 1, 1, 1, 0])