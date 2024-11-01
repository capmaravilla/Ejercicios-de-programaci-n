//* ---> 5
//? The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:
// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]
//? Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.
//? Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

function maxSequence(arr) {
	let counter = 0;
	const sum = [];
	for (const el of arr) {
		if (counter + el <= 0) {
			counter = 0;
		} else {
			counter += el;
			sum.push(counter);
		}
	}
	return sum.sort((a, b) => a - b).pop() || 0;
}

const maxSequence2 = (arr) => {
	let min = 0;
	let ans = 0;
	let sum = 0;
	for (let i = 0; i < arr.length; ++i) {
		sum += arr[i];
		min = Math.min(sum, min);
		ans = Math.max(ans, sum - min);
	}
	return ans;
};

const array = [
	7, 4, 11, -11, 39, 36, 10, -6, 37, -10, -32, 44, -26, -34, 43, 43,
];

// console.log(maxSequence(array));
// console.log(maxSequence2(array));

//* ---> 6
//? Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.
// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

function uniqueInOrder(iterable) {
	const result = [];
	for (const el of iterable) {
		el !== result[result.length - 1] ? result.push(el) : 0;
	}
	return result;
}

function uniqueInOrder2(iterable) {
	return [...iterable].filter((a, i) => a !== iterable[i - 1]);
}

// console.log(uniqueInOrder([1, 2, 2, 3, 3]));
// console.log(uniqueInOrder('ABBCcAD'));

//* ---> 6
//? Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
//? Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
//? If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

function order(words) {
	arr = words.split(' ');
	result = [];
	for (const el of arr) {
		result[el.match(/\d+/) - 1] = el;
		// \d representa cualquier dígito (del 0 al 9)
		// + significa "uno o más", para capturar secuencias de dígitos completas
	}
	return result.join(' ');
}

function order2(words) {
	return words
		.split(' ')
		.sort((a, b) => a.match(/\d/) - b.match(/\d/))
		.join(' ');
	//TODO Buen ejemplo del uso de SORT()
}

// console.log(order('is2 Thi1s T4est 3a'));

//* ---> 6 Tribonacci Sequence
//? Well met with Fibonacci bigger brother, AKA Tribonacci.
//? As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(
//? So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:
// [1, 1 ,1, 3, 5, 9, 17, 31, ...]
//? But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1] basically shifts the common Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:
// [0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
//? Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.
//? Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array (except in C return NULL) and be ready for anything else which is not clearly specified ;)

function tribonacci(signature, n) {
	if (n === 0) {
		return [];
	}

	if (typeof n !== 'number') {
		return null;
	}

	if (n <= 3) {
		return signature.slice(0, n);
	}

	arrTri = [...signature];
	for (let el = 3; el < n; el++) {
		arrTri.push(arrTri[el - 1] + arrTri[el - 2] + arrTri[el - 3]);
	}
	return arrTri;
}

function tribonacci2(signature, n) {
	for (let i = 0; i < n - 3; i++) {
		// iterate n times
		signature.push(signature[i] + signature[i + 1] + signature[i + 2]); // add last 3 array items and push to trib
	}
	return signature.slice(0, n); //return trib - length of n
}

// console.log(tribonacci([1, 1, 1], 10));
// console.log(tribonacci2([1, 1, 1], 4));

//* --->6
//? A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
//? Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string) {
	let check = true;
	const alphabet = 'abcdefghijklmnopqrstuvwxyz';
	for (const el of alphabet) {
		if (!string.toLowerCase().includes(el)) {
			check = false;
		}
	}
	return check;
}

function isPangram2(string) {
	str = string.toLowerCase();
	return 'abcdefghijklmnopqrstuvwxyz'
		.split('')
		.every((x) => str.indexOf(x) !== -1);
}

// console.log(isPangram('The quick brown fox jumps over the lazy dog.'));
// console.log(isPangram('This is not a pangram.'));
