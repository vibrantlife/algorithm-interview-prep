// 1. Write a JavaScript program to calculate the factorial of a number. 
// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example, 5! = 5 x 4 x 3 x 2 x 1 = 120 
function factorial(n) {
	if (n < 2 ) return 1;
	else {
		return n *  factorial(n - 1);
	}
}

//console.log(factorial(5));
//expect 120

// 2. Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.
function gcd(a, b) {
	if (!b) return a;

	else {
		return gcd(b, a % b);
	}

}

//console.log(gcd(32, 16));
//expect 16

// 3. Write a JavaScript program to get the integers in range (x, y). 
// Example : range(2, 9)
// Expected Output : [3, 4, 5, 6, 7, 8]

function range(start, end) {
	if (end === start + 1) return [];

	else {
		let result = range (start, end - 1);
		result.push(end - 1);
		return result;
	}
}

//console.log(range(2, 9));

// 4. Write a JavaScript program to compute the sum of an array of integers. 
// Example : var array = [1, 2, 3, 4, 5, 6]
// Expected Output : 21 

function sumArray(arr) {
	if (arr.length < 2) return arr[0];

	else {
		let result = arr.pop();
		return result + sumArray(arr);
	}

}

let arraySum = [1, 2, 3, 4, 5, 6];
//console.log(sumArray(arraySum));

// 5. Write a JavaScript program to compute the exponent of a number. 
// Note : The exponent of a number says how many times the base number is used as a factor.
// 82 = 8 x 8 = 64. Here 8 is the base and 2 is the exponent.

function exponent(num, exp) {
	if (exp < 2) return num;

	else {
		return num * exponent(num, exp - 1);
	}
}

//console.log(exponent(8, 2));

// 6. Write a JavaScript program to get the first n Fibonacci numbers.
// Note : The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, . . . Each subsequent number is the sum of the previous two.

function firstNFib(n) {
	if (n === 1) return [0, 1];

	else {
		let result = firstNFib(n - 1);
		result.push(result[result.length - 1] + result[result.length - 2]);
		return result;
	}

}

//console.log(firstNFib(9));

// 7. Write a JavaScript program to check whether a number is even or not.

function is_even(n) {
	if (n < 0) {
		n = Math.abs(n);
	}
	if (n === 1) {
		return false;
	}
	if (n === 0) {
		return true;
	}

	else {
		n = n - 2;
		return is_even(n)
	}
}

//console.log(is_even(64)); //expect true
//console.log(is_even(-15)); // expect false
//console.log(is_even(15)); // expect false



// 8. Write a JavaScript program for binary search. 
// Sample array : [0,1,2,3,4,5,6]
// console.log(l.br_search(5)) will return '5' 

function binarySearch(arr, target) {
	let mid = Math.floor(arr.length / 2);

	console.log(arr)
	if (target === arr[mid]) {
		return mid;
	}
	if (target > arr[mid]) {
		arr = arr.slice(mid + 1);
		return mid + 1 +  binarySearch(arr, target)
	}
	if (target < arr[mid]) {
		arr = arr.slice(0, mid);
		return binarySearch(arr, target);
	}
	else {
		return  target + ' is not in the array';
	}

}
let array = [0,1,2,3,4,5,6]
//console.log(binarySearch(array, 2))

// 9. Write a merge sort program in JavaScript.
// Sample array : [34,7,23,32,5,62]
// Sample output : [5, 7, 23, 32, 34, 62]

function merge(left, right){
	var result = [];
	let leftLength = left.length;
	let rightLength = right.length;
	let l = 0;
	let r = 0;

	while (l < leftLength && r < rightLength) {
		if (left[l] < right[r]) {
			result.push(left[l++]);
		}
		else {
			result.push(right[r++]);
		}
	}

	return result.concat(left.slice(l)).concat(right.slice(r));

}

function mergeSort(arr) {
	if (arr.length < 2) {
		return arr;
	}
	else {
		var mid = Math.floor(arr.length / 2);
		var left = arr.slice(0, mid);
		var right = arr.slice(mid);
		return merge(mergeSort(left), mergeSort(right));
	}
}



let mergeArray = [34,7,23,32,5,62];
console.log(mergeSort(mergeArray));

