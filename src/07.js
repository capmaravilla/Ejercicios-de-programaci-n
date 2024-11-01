// * Beginner Series #1 School Paperwork #8kyu
//? Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.
//? Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.
// n= 5, m=5 --> 25
// n=-5, m=5 -->  0

function paperwork(n, m) {
  if (n > 0 && m > 0) {
    return n * m;
  }
  return 0;
}

function paperwork2(n, m) {
  return n > 0 && m > 0 ? n * m : 0;
}

//* Find the next perfect square! #7kyu
//? You might know some pretty large perfect squares. But what about the NEXT one?
//? Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.
//? If the argument is itself not a perfect square then return either -1 or an empty value like None or null, depending on your language. You may assume the argument is non-negative.
// 121 --> 144
// 625 --> 676
// 114 --> -1  #  because 114 is not a perfect square

function findNextSquare(sq) {
  if (Number.isInteger(Math.sqrt(sq))) {
    return (Math.sqrt(sq) + 1) ** 2;
  }
  return -1;
}

function findNextSquare2(sq) {
  let a = Math.sqrt(sq);
  if (Number.isInteger(a)) {
    return Math.pow(++a, 2);
  }
  return -1;
}

console.log(findNextSquare2(121));

// TODO el resultado O se interpreta como false en una condicion
function findNextSquare3(sq) {
  return Math.sqrt(sq) % 1 ? -1 : Math.pow(Math.sqrt(sq) + 1, 2);
}

//* Find the odd int
//? Given an array of integers, find the one that appears an odd number of times.
//? There will always be only one integer that appears an odd number of times.
// [7] -> 7, because it occurs 1 time (which is odd).
// [0] -> 0, because it occurs 1 time (which is odd).
// [1,1,2] -> 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] -> 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] -> 4, because it appears 1 time (which is odd).

function findOdd(A) {
  let rep = {};
  A.forEach(u => {
    rep[u] = (rep[u] || 0) + 1;
  });

  for (let num in rep) {
    if (rep[num] % 2 !== 0) {
      return parseInt(num);
    }
  }
}

console.log(findOdd([7]));

// TODO operandor XOR para sumar de forma binaria y averiguar el numero impar

function findOdd2(xs) {
  let cache = xs.reduce((a, b) => a ^ b); //💀 se ve que es para encontrar un numero impar
  return cache;
}
console.log(findOdd2([2, 3, 4, 5, 2, 5, 4, 3, 2]));

//La función findOdd recibe un array xs y utiliza el método reduce para aplicar una operación XOR bit a bit a todos los elementos del array. El operador XOR (^) devuelve un 1 en cada bit donde los bits de los dos operandos son diferentes, y un 0 donde son iguales. Al hacer esto con todos los elementos del array, al final quedará el elemento que tiene una cantidad impar de repeticiones en el array original.
