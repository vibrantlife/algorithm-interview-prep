function factorial(n)
{
	let sum = 1;
	
	for (var i = 1; i <=n; i++)
	{
		sum = sum * i;
	}

	return sum;
}

console.log(factorial(4));

var factorialRecursive = function(n) {
	if (n === 0) {
		return 1
	}
	else {
		return n * factorialRecursive(n - 1);
	}
}

console.log(factorialRecursive(4));