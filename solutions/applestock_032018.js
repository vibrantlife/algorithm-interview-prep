// complexity: O(n) time and O(1) space. 
// this is an example of a greedy approach. 

function getMaxProfit()
{
	if (stockPrices.length < 2)
	{
		throw new Error('Getting a profit requires at least 2 prices');

	}

	//minPrice is first value
	let minPrice = stockPrices[0];
	//maxProfit is first profit available even if negative which is second value minus first
	let maxProfit = stockPrices[1] - stockPrices[0];

	//start at second index since we cannot buy and sell at the same time
	for (let i = 0; i < stockPrices.length; i++)
	{
		let currentPrice = stockPrices[i];

		//check potential profit between min price and current price
		let potentialProfit = currentPrice - minPrice;

		//update max profit if potential profit is more than current max profit 
		maxProfit = Math.max(maxProfit, potentialProfit);

		//update minPrice so it's always the lowest price in the array
		minPrice = Math.min(minPrice, currentPrice);
	}

	return maxProfit;

}




const stockPrices = [10, 7, 5, 11, 9]
console.log(getMaxProfit(stockPrices));