//never use in production code
//compare 2 numbers at a time and swap if numbers are out of order
//if anything was swapped in previous iteration, loop will run again

function bubblesort(arr)
{
		do 
		{
			//was it swapped? 
			var swapped = false;
			for (let i = 0; i < arr.length; i++)
			{
				if (arr[i] > arr[i + 1])
				{
					const temp = arr[i];
					arr[i] = arr[i + 1];
					arr[i + 1] = temp;
					swapped = true;
				}
			} 
		} while (swapped)
}

bubblesort([5,3,6,1])
//expect 1,3,5,6