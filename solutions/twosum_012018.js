function twoSum(numbers, target)
{
	let hash = {};
	let current;

	for (let i = 0; i < numbers.length; i++)
	{
		current = numbers[i];
		if (hash[current]) {return true;}
		hash[target - current] = true;
	}
	return false;
}

console.log(twoSum([4,2,6,5,7,9,10], 13))