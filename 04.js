// * List Filtering #7kyu
// ? In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
// [1, 2, 'a', 'b'] -> [1, 2];
// [1, 'a', 'b', 0, 15] -> [1, 0, 15];
// [1, 2, 'aasf', '1', '123', 123] -> [1, 2, 123];

// const list = [1, 'a', 'b', 0, 15];

function filter_list(l) {
  return l.filter(u => typeof u === 'number');
}

// console.log(filter_list(list));

//* Friend or Foe? #7kyu
//? Make a program that filters a list of strings and returns a list with only your friends name in it.
//? If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
// ["Ryan", "Kieran", "Jason", "Yous"] -> ["Ryan", "Yous"]
// ["Peter", "Stephen", "Joe"] -> []

// const list = ['Peter', 'Stephen', 'Joe', 'Mark'];

function friend(friends) {
  let container = [];
  for (el of friends) {
    if (el.split('').length === 4) {
      container.push(el);
    }
  }
  return container;
}

// console.log(friend(list));

//* Break camelCase #6kyu
// ? Complete the solution so that the function will break up camel casing, using a space between words.
// "camelCasing"  ->  "camel Casing"
// "identifier"   ->  "identifier"
// ""             ->  ""

// const camelCase = 'camelCasingGmail';

function solution(string) {
  return string.replace(/[A-Z]/g, u => ' ' + u);
  // TODO Forma de reemplazar letras en una String usando el contenido reemplazado
}

// console.log(solution(camelCase));

//* Replace With Alphabet Position #6kyu
//? In this kata you are required to, given a string, replace every letter with its position in the alphabet.
//? If anything in the text isn't a letter, ignore it and don't return it.
//"The sunset sets at twelve o' clock." ->
//"20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"

// const string = "The sunset sets at twelve o' clock.";

// TODO Uso otro string com referencia de indices

function alphabetPosition(text) {
  let sample = 'abcdefghijklmnopqrstuvwxyz';
  text = text
    .toLowerCase()
    .replace(/[^a-z]/g, '')
    .replace(/[a-z]/g, u => sample.indexOf(u) + 1 + ' ')
    .slice(0, -1);
  return text;
}

// console.log(alphabetPosition(string));

// TODO Cambiar los caracteres a indice en el alfabeto con map()
// let alphabetPosition = text =>
//   text
//     .toUpperCase()
//     .replace(/[^A-Z]/g, '')
//     .split('')
//     .map(ch => ch.charCodeAt(0) - 64)
//     .join(' ');

// TODO Alternativa a los replace para filtrar caracteres
function alphabetPosition(text) {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  return text
    .toLowerCase()
    .split('')
    .filter(letter => {
      let index = alphabet.indexOf(letter);
      return index > -1;
    })
    .map(letter => alphabet.indexOf(letter) + 1)
    .join(' ');
}

//* Return Negative #8kyu
//? In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
// 1 -> -1
// -5 -> -5
// 0 -> 0
// 0.12 -> -0.12

function makeNegative(num) {
  return num > 0 ? -num : num;
}

function makeNegative2(num) {
  return -Math.abs(num);
}

// console.log(makeNegative2(9));

//* Find the smallest integer in the array #8kyu
//? Given an array of integers your solution should find the smallest integer.
// [34, 15, 88, 2] -> 2
// [34, -345, -1, 100] -> -345

// const array = [34, -345, -1, 100];

function findSmallestInt(arr) {
  return arr.sort((a, b) => a - b).shift();
  //   return arr.sort((a, b) => a - b)[0];
}

function findSmallestInt2(args) {
  // TODO funcion de Math.min para buscar el número más bajo de un array
  return Math.min(...args);
}

// console.log(findSmallestInt(array));

//* Convert a string to an array #8kyu
//? Write a function to split a string and convert it into an array of words.
// "Robin Singh" -> ["Robin", "Singh"]

// const str = 'I love arrays they are my favorite';

function stringToArray(string) {
  return string.split(' ');
}

// console.log(stringToArray(str));

//* If you can't sleep, just count sheep!! #8kyu
//? Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

var countSheep = function (num) {
  let murmur = [];
  for (i = 1; i <= num; i++) {
    murmur.push(i + ' sheep...');
  }
  return murmur.join('');
};

// console.log(countSheep(3));

// * Take a Ten Minutes Walk #6kyu
// ? You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

// const walkSigns = ['s', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's'];

function isValidWalk(walk) {
  if (walk.length !== 10) {
    return false;
  }
  let vertical = 0;
  let horizontal = 0;
  for (el of walk) {
    el === 'n' ? vertical++ : vertical;
    el === 's' ? vertical-- : vertical;
    el === 'w' ? horizontal++ : horizontal;
    el === 'e' ? horizontal-- : horizontal;
  }
  return vertical === 0 && horizontal === 0;
}

//TODO Con un SWITCH mejor que mi if
function isValidWalk2(walk) {
  var dx = 0;
  var dy = 0;
  var dt = walk.length;

  for (var i = 0; i < walk.length; i++) {
    switch (walk[i]) {
      case 'n':
        dy--;
        break;
      case 's':
        dy++;
        break;
      case 'w':
        dx--;
        break;
      case 'e':
        dx++;
        break;
    }
  }

  return dt === 10 && dx === 0 && dy === 0;
}

// TODO El return va llamando a la Funcion que hemos creado 💀
function isValidWalk3(walk) {
  function count(val) {
    return walk.filter(a => a == val).length;
  }
  return (
    //TODO Cuando retornamos booleans puedo meter lo IF pequeños del principio
    walk.length == 10 && count('n') == count('s') && count('w') == count('e')
  );
}

// console.log(isValidWalk3(walkSigns));

//* String repeat #8kyu
//? Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

function repeatStr(n, s) {
  return s.repeat(n);
}

// console.log(repeatStr(4, 'Tatata'));

//* Abbreviate a Two Word Name #8kyu
//? Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
//? The output should be two capital letters with a dot separating them.
// Sam Harris => S.H
// patrick feeney => P.F

function abbrevName(name) {
  return (
    name
      .split(' ')
      .map(u => u.slice(0, 1).toUpperCase())
      // .map(u => u[0].toUpperCase())
      .join('.')
  );
}

function abbrevName(name) {
  var nameArray = name.split(' ');
  //TODO Coger las iniciales directamente del array
  return (nameArray[0][0] + '.' + nameArray[1][0]).toUpperCase();
}

// console.log(abbrevName('Sam Harris'));

// * Stop gninnipS My sdroW
//? Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
// "Hey fellow warriors"  --> "Hey wollef sroirraw"
// "This is a test        --> "This is a test"
// "This is another test" --> "This is rehtona test"

// const str = 'Hey fellow warriors';

function spinWords(string) {
  return string
    .split(' ')
    .map(u => (u.length > 4 ? u.split('').reverse().join('') : u))
    .join(' ');
}

function spinWords2(string) {
  // TODO REPLACE para buscar todas la palabras de un string de mas de 5 letras y luego cambiarlas
  return string.replace(/\w{5,}/g, function (w) {
    return w.split('').reverse().join('');
  });
}

// console.log(spinWords2(str));
