//* Count characters in your string #6kyu
//? The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
//? What if the string is empty? Then the result should be empty object literal, {}.
// ''    ->{});
// 'a'   ->{ a: 1 });
// 'ab'  ->{ a: 1, b: 1 });
// 'aba' ->{ a: 2, b: 1 });
// 'ABC' ->{ A: 1, B: 1, C: 1 });

// Usando filter, lo cual se ve que no es lo correcto
function count1(string) {
  let cache = {};
  string.split('').filter(u => (cache[u] = (cache[u] || 0) + 1));
  return cache;
}
// Usando forEach()
function count2(string) {
  let cache = {};
  string.split('').forEach(u => (cache[u] = (cache[u] || 0) + 1));
  return cache;
}
// Asi lo entiendo bastante mejor
function count3(string) {
  var count = {};
  string.split('').forEach(s => {
    count[s] ? count[s]++ : (count[s] = 1);
  });
  return count;
}

// usando Reduce()
function count4(string) {
  const cache = string.split('').reduce((acc, el) => {
    acc[el] = (acc[el] || 0) + 1;
    return acc;
  }, {});
  return cache;
}

// console.log(count1('abajksssaaaaa'));

//* Bouncing Balls #6kyu
//? A child is playing with a ball on the nth floor of a tall building. The height of this floor above ground level, h, is known.
//? He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).
//? His mother looks out of a window 1.5 meters from the ground.
//? How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing)?
//? Three conditions must be met for a valid experiment:
//? Float parameter "h" in meters must be greater than 0
//? Float parameter "bounce" must be greater than 0 and less than 1
//? Float parameter "window" must be less than h.
//? If all three conditions above are fulfilled, return a positive integer, otherwise return -1.
// h = 3, bounce = 0.66, window = 1.5, --> 3
// h = 3, bounce = 1, window = 1.5,    --> -1

function bouncingBall(h, bounce, window) {
  if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) return -1;
  let cache = -1;
  while (h > window) {
    h *= bounce;
    cache += 2;
  }
  return cache;
}

// console.log(bouncingBall(3.0, 0.66, 1.5)); //  3);

//* Secret Agent 101: The secret password #6kyu
//? Hello, fellow Warrior! Or, should I say, Secret Agent?
//? This is your chance to prove that you are true spy material, and not just some amateur with a tuxedo!
//? The first step on your way to the double 0 is also the most important: Learn how to craft and decode a secret password to communicate safely with other agents.
//? THE KATA
//? This Kata will be divided in two parts.
//? In the first, you will create a function that takes a string as argument and returns a jumbled string, with the following rules and restrictions:
//? The input string MUST be a 9 characters long word (made only of lowercase letters from "a" to "z" of the English alphabet). If the argument doesn't meet this requirement (or no argument at all is passed to the function), it must return "BANG!" (there are no second chances in the spy world!)
//? The string must be divided into 3 equal parts of 3 characters each:
//? The first and third letter will be converted to the corresponding number, according to the English alphabet (ex. a = 1, b = 2, c = 3 ... z = 26, etc.)
//? The fourth, fifth, and sixth letter will be reversed.
//? The seventh, eighth, and ninth letter will be substituted with the letter that follows them in the English alphabet (z will be substituted with a).
//? Finally, the returned string must be in the following order: Part 2, Part 3, and Part 1
// encrypt("jamesbond")           --> "bsepoe10a13"
// encrypt("I'll kill you, 007!") --> "BANG!"
//? In the second part of the Kata, you will create another function that takes a jumbled password and acts as follows:
//? It decrypts the password argument, reversing the rules and following the same restrictions set in part 1 of the kata.
//? It compares the decrypted string to an array of secret passcodes (you can't see the passcodes, but you can test if yours is present in the array). Watch out: Not all of the secret passcodes are valid strings!
//? It must return:
//? "Nice to meet you, fellow Agent!" if the passcode is both valid and contained in the array, or;
//? "BANG!" if the passcode is not in the array, or if the string is not valid.
// decrypt("bsepoe10a13")                    --> "Nice to meet you, fellow Agent!"
// decrypt("How are you still alive, 007??") --> "BANG!"

//Section 1: Encryption
function encrypt(passcode = 0) {
  if (passcode.length !== 9 || !/^[a-z]*$/.test(passcode)) {
    return 'BANG!';
  }
  let p1 = passcode.split('').splice(0, 3);
  let p2 = passcode.split('').splice(3, 3);
  let p3 = passcode.split('').splice(6, 3);

  p1[0] = p1[0].charCodeAt(0) - 96;
  p1[2] = p1[2].charCodeAt(0) - 96;
  p2 = p2.reverse();
  p3 = p3.map(u =>
    u === 'z' ? 'a' : String.fromCharCode(u.charCodeAt(0) + 1)
  );
  return p2.concat(p3, p1).join('');
}

//Section 2: Decryption
var validPasscodes = passcodes; // Do not change this! Only the boss knows all the passcodes,
// but you can still check through this var

function decrypt(password = 0) {
  if (
    password.length < 9 ||
    password.length > 11 ||
    !/^[a-z0-9]*$/.test(password)
  ) {
    return 'BANG!';
  }

  let p1 = password.split('').splice(0, 3);
  let p2 = password.split('').splice(3, 3);
  let p3 = password.split('').splice(6);

  let numbers = p3.join('').replace(/\D/g, ' ');
  let letters = p3.join('').replace(/\d/g, '');
  numbers = numbers.split(' ').splice(0);
  numbers[0] = String.fromCharCode(parseInt(numbers[0]) + 96);
  numbers[1] = String.fromCharCode(parseInt(numbers[1]) + 96);
  p3 = [numbers[0], letters, numbers[1]];

  p1 = p1.reverse();
  p2 = p2.map(u =>
    u === 'a' ? 'z' : String.fromCharCode(u.charCodeAt(0) - 1)
  );

  password = p3.concat(p1, p2).join('');

  if (validPasscodes.includes(password)) {
    return 'Nice to meet you, fellow Agent!';
  } else {
    return 'BANG!';
  }
}

// Section 1: Encryption

let alphabets = 'abcdefghijklmnopqrstuvwxyz';

function encrypt(passcode) {
  // Check for undefined or incorrect length of passcode
  if (typeof passcode !== 'string' || !passcode.match(/^[a-z]{9}$/)) {
    return 'BANG!';
  }

  let finalStr = '';
  let arr = [passcode.slice(0, 3), passcode.slice(3, 6), passcode.slice(6, 9)];

  // Create part1 by converting first and last characters to numbers
  let part1 =
    alphabets.indexOf(arr[0][0]) +
    1 +
    arr[0][1] +
    (alphabets.indexOf(arr[0][2]) + 1);

  // Reverse the second part
  let part2 = arr[1].split('').reverse().join('');

  // Increment characters in the third part
  let part3 = arr[2]
    .split('')
    .map(char => {
      let currentIndex = alphabets.indexOf(char);
      return alphabets[(currentIndex + 1) % 26]; // Wrap around if 'z'
    })
    .join('');

  // Combine parts in the specified order
  finalStr += part2 + part3 + part1;

  return finalStr;
}

// Section 2: Decryption
var validPasscodes = passcodes; // Do not change this! Only the boss knows all the passcodes

function decrypt(password) {
  // Check for undefined or incorrect input
  if (typeof password !== 'string' || password.length < 9) {
    return 'BANG!';
  }

  let passcode = '';
  let arr = [password.slice(6), password.slice(0, 3), password.slice(3, 6)];

  const regex = /(\d+)([a-z])(\d+)/;
  const match = password.match(regex);

  // If regex does not match, return "BANG!"
  if (!match) return 'BANG!';

  // Extract the parts
  const number1 = parseInt(match[1]); // The first number
  const char = match[2]; // The character
  const number2 = parseInt(match[3]); // The second number

  // Build part1 from extracted values
  let part1 = alphabets[number1 - 1] + char + alphabets[number2 - 1];
  let part2 = arr[1].split('').reverse().join('');
  let part3 = arr[2]
    .split('')
    .map(char => {
      let currentIndex = alphabets.indexOf(char);
      return alphabets[(currentIndex - 1 + 26) % 26]; // Wrap-around
    })
    .join('');

  passcode += part1 + part2 + part3;

  // Validate passcode against the validPasscodes list
  if (passcode.match(/^[a-z]{9}$/) && validPasscodes.includes(passcode)) {
    return 'Nice to meet you, fellow Agent!';
  } else {
    return 'BANG!';
  }
}
