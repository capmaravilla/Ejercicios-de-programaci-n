//* Counting Duplicates

//? Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice 00

function duplicateCount(text) {
	const arr = text.toLowerCase().split('').sort();
	const rep = [];
	while (arr.length > 0) {
		const a = arr.shift();
		arr.includes(a) && !rep.includes(a) ? rep.push(a) : 0;
	}
	return rep.length;
}

// function duplicateCount2(text) {
// 	return (
// 		text
// 			.toLowerCase()
// 			.split('')
// 			.sort()
// 			.join('')
// 			.match(/([^])\1+/g) || []
// 	).length;
// }

console.log(duplicateCount('aabbccccccch'));
console.log(duplicateCount2('aabbccccccch'));

//* Duplicate Encoder #6kyu
// ? The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

function duplicateEncode(word) {
	const arr = word.toLowerCase().split('');
	console.log(arr);
	const rep = [];
	while (arr.length > 0) {
		const a = arr.shift();
		arr.includes(a) && !rep.includes(a) ? rep.push(a) : 0;
	}

	let result = '';
	for (const el of word) {
		result += !rep.includes(el.toLowerCase()) ? '(' : ')';
	}

	return result;
}

function duplicateEncode2(word) {
	return word
		.toLowerCase()
		.split('')
		.map((a, i, w) => (w.indexOf(a) === w.lastIndexOf(a) ? '(' : ')'))
		.join('');
}

function duplicateEncode3(word) {
	let unique = '';
	const word2 = word.toLowerCase();
	for (let i = 0; i < word.length; i++) {
		if (word2.lastIndexOf(word2[i]) === word2.indexOf(word[i])) {
			unique += '(';
		} else {
			unique += ')';
		}
	}
	return unique;
}

console.log(duplicateEncode('hola'));

//* Beginner Series #3 Sum of Numbers
//? Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.
// Note: a and b are not ordered!
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
// Your function should only return a number, not the explanation about how you get that number. 00

function getSum(a, b) {
	const arr = [];
	for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
		arr.push(i);
	}
	return arr.reduce((acc, el) => acc + el);
}

function GetSum(a, b) {
	return ((Math.abs(a - b) + 1) * (a + b)) / 2;
}

const variable1 = 56;
const variable2 = 57;

console.log('hola');
const result = getSum(2, 1);
console.log(result);
