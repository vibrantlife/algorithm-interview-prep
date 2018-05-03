
// Write a function for finding the index of the "rotation point," which is where I started working from the beginning of the dictionary. This array is huge (there are lots of words I don't know) so we want to be efficient here.

function findRotation(list)
{
	//define floor as list[0]
	//define ceiling as list[list.length -1]
	//define mid as floor + ceiling /2

	let floorIndex = 0;
	let ceilingIndex = list.length -1;
	let firstWord = list[0];

	while (floorIndex < ceilingIndex)
	{
		//guess point halfway between floor and ceiling 
		let guessIndex = Math.floor(floorIndex + ((ceilingIndex - floorIndex) / 2));

		//if guess comes after first word or is the first word 
		if (guessIndex >= firstWord || guessIndex === firstWord)
		{
			//go right 
			floorIndex = guessIndex;
		}
		else 
		{
			//go left 
			ceilingIndex = guessIndex;
		}

		//if floor and ceiling have converged 
		if (floorIndex + 1 === ceilingIndex)
		{
			//between floor and ceiling is where we flipped to the beginning
			//so ceiling is alphabetically first
			break;
		}
		return ceilingIndex;
	}





}



  var words = [
    'ptolemaic',
    'retrograde',
    'supplant',
    'undulate',
    'xenoepist',
    'asymptote',  // <-- rotates here!
    'babka',
    'banoffee',
    'engender',
    'karpatka',
    'othellolagkage',
];

findRotation(words);