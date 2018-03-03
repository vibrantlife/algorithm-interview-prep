function factorial(n)
{
	let sum = 1;
	for (var i = 1; i <=n; i++)
	{
		sum = sum * i;
	}
	 console.log(sum)
}

factorial(4);