//* Delete occurrences of an element if it occurs more than n times #6kyu
//? Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
//? For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
// ([20,37,20,21], 1), ->[20,37,21]
// ([1,1,3,3,7,2,2,2,2], 3) -> [1, 1, 3, 3, 7, 2, 2, 2]
// ([12,39,19,39,39,19,12], 1) -> [12, 39, 19]

const list = [1, 1, 3, 3, 7, 2, 2, 2, 2];
// TODO Uso de FILTER para saber cuantas repeticiones ahi y LASTINDEXOF para marcar que numero quiero borrar desde el final con SPLICE
function deleteNth(arr, n) {
  for (el of arr) {
    while (arr.filter(u => u === el).length > n) {
      let delIdx = arr.lastIndexOf(el);
      arr.splice(delIdx, 1);
    }
  }
  return arr;
}

// TODO Con FILTER() coger X veces el elemento de un array. Controlar las repeticiones. 💀

function deleteNth3(array, rep) {
  let cache = {};
  return array.filter(u => (cache[u] = cache[u] + 1 || 1) <= rep);
}

// Aquí está cómo funciona:
// Primero, se crea un objeto vacío m = {}. Este objeto se utilizará para llevar un registro de cuántas veces se ha encontrado cada elemento en el array a.
// Luego, la función utiliza el método filter en el array a. El filter crea un nuevo array con todos los elementos que pasan la prueba implementada por la función de callback.
// La función de callback v => (m[v] = m[v] + 1 || 1) <= x se ejecuta para cada elemento v del array a.
// Dentro de la función de callback, se realiza la siguiente operación: (m[v] = m[v] + 1 || 1). Esto significa:
// Si m[v] existe (es decir, si el elemento v ya se ha encontrado antes), se incrementa su valor en 1 (m[v] + 1).
// Si m[v] no existe (es decir, si es la primera vez que se encuentra el elemento v), se establece en 1 (|| 1).
// El resultado de esta operación se asigna de nuevo a m[v].
// Finalmente, la función de callback devuelve true (lo que significa que el elemento v se conserva en el nuevo array) si el valor de m[v] (es decir, el número de veces que se ha encontrado v) es menor o igual a x. De lo contrario, devuelve false (lo que significa que el elemento v se elimina del nuevo array).

function deleteNth2(array, rep) {
  var cache = {};
  return array.filter(u => {
    cache[u] = (cache[u] || 0) + 1;
    return cache[u] <= rep;
  });
}

// La asignación y la comparación se realizan en dos pasos separados:
// cache[u] = (cache[u] || 0) + 1; actualiza el valor de cache[u] (incrementándolo en 1 o estableciéndolo en 1 si no existe).
// return cache[u] <= rep; compara el valor actualizado de cache[u] con rep.

console.log(deleteNth2(list, 3));

//* How good are you really? #8kyu
//? You receive an array with your peers' test scores. Now calculate the average and compare your score!
//? Return true if you're better, else false!
// [4,5,4], 5 -> true
// [5,7,8], 5 -> false

function betterThanAverage(classPoints, yourPoints) {
  return (
    classPoints.reduce((acc, el) => acc + el) / classPoints.length < yourPoints
  );
}

console.log(betterThanAverage([5, 4], 5));

//* Reversed Strings #8kyu
//? Complete the solution so that it reverses the string passed into it.
// 'word' -> 'drow'

const string = 'arroz';

function solution(str) {
  return str.split('').reverse().join('');
}

console.log(solution(string));

// * Rock Paper Scissors #8kyu
// ? You have to return which player won! In case of a draw return Draw!.
// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

const rps = (p1, p2) => {
  if (p1 === p2) {
    return 'Draw!';
  }
  if (p1 === 'scissors') {
    if (p2 === 'paper') {
      return 'Player 1 won!';
    }
    return 'Player 2 won!';
  }
  if (p1 === 'paper') {
    if (p2 === 'rock') {
      return 'Player 1 won!';
    }
    return 'Player 2 won!';
  }
  if (p1 === 'rock') {
    if (p2 === 'scissors') {
      return 'Player 1 won!';
    }
    return 'Player 2 won!';
  }
};

const rps2 = (p1, p2) => {
  if (p1 == p2) return 'Draw!';
  if (p1 == 'rock' && p2 == 'scissors') return 'Player 1 won!';
  if (p1 == 'scissors' && p2 == 'paper') return 'Player 1 won!';
  if (p1 == 'paper' && p2 == 'rock') return 'Player 1 won!';
  return 'Player 2 won!';
};

// TODO PIEDRA, PAPEL Y TIJERAS con reglas
const rps3 = (p1, p2) => {
  if (p1 === p2) return 'Draw!';
  var rules = { rock: 'scissors', paper: 'rock', scissors: 'paper' };
  if (p2 === rules[p1]) {
    return 'Player 1 won!';
  } else {
    return 'Player 2 won!';
  }
};

// TODO Expresion regular y .test() ???
const rps4 = (p1, p2) => {
  if (p1 === p2) {
    return 'Draw!';
  }
  return `Player ${
    /rockscissors|scissorspaper|paperrock/.test(p1 + p2) ? 1 : 2
  } won!`;
};

// console.log(rps4('paper', 'scissors'));

// * Who likes it?
//? You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.
//? Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:
// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

function likes(names) {
  if (names.length === 0) {
    return 'no one likes this';
  } else if (names.length === 1) {
    return `${names[0]} likes this`;
  } else if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this`;
  } else if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else if (names.length > 2) {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
}

function likes2(names) {
  names = names || [];
  switch (names.length) {
    case 0:
      return 'no one likes this';
      break;
    case 1:
      return names[0] + ' likes this';
      break;
    case 2:
      return names[0] + ' and ' + names[1] + ' like this';
      break;
    case 3:
      return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this';
      break;
    default:
      return (
        names[0] +
        ', ' +
        names[1] +
        ' and ' +
        (names.length - 2) +
        ' others like this'
      );
  }
}

function likes3(names) {
  return {
    0: 'no one likes this',
    1: `${names[0]} likes this`,
    2: `${names[0]} and ${names[1]} like this`,
    3: `${names[0]}, ${names[1]} and ${names[2]} like this`,
    4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`,
  }[Math.min(4, names.length)];
}

const n1 = [];
const n2 = ['David'];
const n3 = ['David', 'Pedro'];
const n4 = ['David', 'Pedro', 'Andres'];
const n5 = ['David', 'Pedro', 'Andres', 'Antonio'];
console.log(likes(n5));
