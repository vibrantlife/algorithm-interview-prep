function removeDupes(str)
{
	let dupeCount = {};
	for (var i = 0; i < str.length; i++ )
	{
		dupeCount[str[i]] = (dupeCount[str[i]] || 0) + 1;
	}
	return Object.keys(dupeCount).join('');
}

removeDupes('hello');