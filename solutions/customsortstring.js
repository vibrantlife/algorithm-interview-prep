// S and T are strings composed of lowercase letters. In S, no letter occurs more than once.

// S was sorted in some custom order previously. We want to permute the characters of T so that they match the order that S was sorted. More specifically, if x occurs before y in S, then x should occur before y in the returned string.

// Return any permutation of T (as a string) that satisfies this property.

var customSortString = function(S,T) {

	//loop through T 
		//add values to map

	let result = '';
	let remainder = '';
	let map = {};
	let Tmap = {};

	for (let i = 0; i < S.length; i++) {
		map[S[i]] = 1;
	}

	
	for (let j = 0; j < T.length; j++) {
		if (Tmap[T[j]]) {
			Tmap[T[j]] += 1;
		}
		else {
			Tmap[T[j]] = 1;
		}
	}

	// for (item in Tmap) {
	// 	if (map[item] === Tmap[item]) {
	// 		result += item;
	// 	}
	// 	else if (Tmap[item] > 1) {
	// 		if (map.hasOwnProperty(item)) {
	// 			result += item;
	// 			Tmap[item] --;
	// 			remainder += item.repeat(Tmap[item]);
	// 		}
	// 	}
	// }
	
	for (item in map) {
		if (Tmap[item] === map[item]) {
			result += item;
		}
		else if (Tmap[item] > 1) {
			if (map.hasOwnProperty(item)) {
				result += item;
				Tmap[item] --;
				remainder += item.repeat(Tmap[item]);
			}
		}
		Tmap[item] --;

	}

	for (item in Tmap) {
		if (Tmap[item] > 0) {
			remainder += item;
		}
	}

console.log(result + remainder)
}

// const string1 = "kqep";
// const string2 = "pekeq";

const string1 = "cba";
const string2 = "abcd";

customSortString(string1, string2);