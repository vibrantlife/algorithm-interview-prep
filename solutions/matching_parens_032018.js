
function isMatch(str)
{
	let map = 
	{
		'[' : ']',
		'{' : '}',
		'(' : ')'
	}
	let left = [];

	//loop through string
	for (let i = 0; i < str.length; i++)
	{
		//if str[i] is [{( then add to last;
			if(str[i] === '(' || str[i] === '[' || str[i] === '{')
			{
				left.push(str[i]);
			}
			//if 
			else if (str[i] === ')' || str[i] === ']' || str[i] === '}')
			{
				let last = left.pop();

				if (str[i] !== map[last])
				{
					console.log(str[i]);
					return false;
				}
			}
	}
	if (left.length !== 0)
	{
		console.log('length false');
		console.log(left)
		return false;
	}

	return true;

	console.log(last);
}

isMatch('(a[0]+b[2c[6]]) {24 + 53}')
isMatch('((b)')

// -- TEST CASES -- //
// ('(a[0]+b[2c[6]]) {24 + 53}')
// ('f(e(d))')
// ('[()]{}([])')
// ('((b)')
// ('(c]')
// ('{(a[])')
// ('([)]')
// ('[({{}}])')
// (')(')