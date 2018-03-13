function highestProductof3(nums)
{
	if (nums.length < 3)
	{
		throw new Error('array must have more than 3 items');
	}

	//assign initial value for highest and lowest number
	let highest = Math.max(nums[0], nums[1]);
	let lowest = Math.min(nums[0], nums[1]);

	//assign intial product for highest and lowest product of 2 nums 
	//(use first 2 values in array)
	let highestProductof2 = nums[0] * nums[1];
	let lowestProductof2 = nums[0] * nums[1];

	//set intial highest product of 3 to first 3. first loop will check against this value
	let highestProductof3 = nums[0] * nums[1] * nums[2];


	//start at 3rd item (index 2)
	for (let i = 2; i < nums.length; i++)
	{
		let current = nums[i];

		//is there a new highest product of 3? 
		//it's either current * highest product of 2 
		//OR current * lowest product of 2
		highestProductof3 = Math.max(
			highestProductof3, 
			current * highestProductof2, 
			current * lowestProductof2
		);

		//check for new highest product of 2
		highestProductof2 = Math.max(
			highestProductof2, 
			current * highest, 
			current * lowest
		);

		//check for new lowest product of 2
		lowestProductof2 = Math.min(
			lowestProductof2, 
			current * highest, 
			current * lowest
		);

		//check for new highest 
		highest = Math.max(highest, current);

		//check for new lowest 
		lowest = Math.max(lowest, current);
	}
	return highestProductof3;
}


arrayofInts = [1, 10, -5, 1, -100];

console.log(highestProductof3(arrayofInts));