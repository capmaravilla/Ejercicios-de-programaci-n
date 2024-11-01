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
// console.log(uniqueInOrder2([1, 2, 2, 3, 3]));
// console.log(uniqueInOrder2('ABBCcAD'));
