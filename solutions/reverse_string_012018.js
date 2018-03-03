function reverseString(str)
{
	var reversed = '';
	for (var i = str.length -1; i >= 0; i--)
	{
		reversed += str[i];
	}
}

// reverseString('Hello');

function reverseString2(str)
{
	let arr = [];
	let i = str.length;

	for (var j = 0; j < str.length; j++)
	{
		arr[j] = str[i - 1];
		i -= 1;
	}
	console.log(arr.join(''))
}

reverseString2('Hello')