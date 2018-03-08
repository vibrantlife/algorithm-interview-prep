function getProductOfAllInts(arr)
{

	if (arr.length < 2)
	{
		throw new Error('Getting the product of numbers at other indices requires at least 2 numbers');
	}

	let products = [];
	let currProduct = 1;

	for (let i = 0; i < arr.length; i++)
	{
		products[i] = currProduct;
		currProduct *= arr[i];

	}

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