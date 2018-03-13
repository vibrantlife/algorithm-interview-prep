//O(n) time O(n) space

function getProductOfAllInts(arr)
{

	//check that there are more than 2 items in array if not throw exception
	if (arr.length < 2)
	{
		throw new Error('Getting the product of numbers at other indices requires at least 2 numbers');
	}

	let products = [];
	let currProduct = 1;

	//loop through array. for each integer find all the products of the integers before it, storing the total product so far each time in currProduct
	for (let i = 0; i < arr.length; i++)
	{
		products[i] = currProduct;
		currProduct *= arr[i];

	}

	//for each integer, find the product for all the integers after it. now we're storing the total product of all other integers

	currProduct = 1;
	
	for (let j = arr.length - 1; j >= 0; j--)
	{
		products[j] *= currProduct;
		currProduct *= arr[j];
	}

	console.log(products)
}

let vals =   [1, 7, 3, 4];

getProductOfAllInts(vals);