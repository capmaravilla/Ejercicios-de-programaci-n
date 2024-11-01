"use strict";
//* Rot13 #5kyu
//? ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.
//? Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
Object.defineProperty(exports, "__esModule", { value: true });
exports.comp = comp;
exports.getMiddle = getMiddle;
exports.getMiddle2 = getMiddle2;
exports.getMiddle3 = getMiddle3;
// function rot13(message: string) {
//   const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
//   let sample = message.split('').map(el => {
//     if (alphabet.includes(el)) {
//       if (alphabet.indexOf(el) < 26) {
//         return alphabet.indexOf(el) < 13
//           ? alphabet[alphabet.indexOf(el) + 13]
//           : alphabet[alphabet.indexOf(el) - 13];
//       } else {
//         return alphabet.indexOf(el) < 39
//           ? alphabet[alphabet.indexOf(el) + 13]
//           : alphabet[alphabet.indexOf(el) - 13];
//       }
//     } else {
//       return el;
//     }
//   });
//   return sample.join('');
// }
// console.log(rot13('aAnNxX tds5dk!'));
function rot13ver2(message) {
    var a = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var b = 'nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM';
    return message.replace(/[a-z]/gi, function (c) { return b[a.indexOf(c)]; });
}
function rot13ver3(message) {
    message.replace(/[a-z]/gi, function (letter) {
        return String.fromCharCode(letter.charCodeAt(0) + (letter.toLowerCase() <= 'm' ? 13 : -13));
    });
}
//* Is this a triangle? #7kyu
//? Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.
//? (In this case, all triangles must have surface greater than 0 to be accepted).
// 1,2,2 -> true
// 4,2,3 -> true
// 2,2,2 -> true
// 1,2,3 -> false
// -5,1,3 -> false
// 0,2,3 -> false
// 1,2,9 -> false
function isTriangle(a, b, c) {
    return a + b > c && a + c > b && c + b > a;
}
var isTriangleVer2 = function (a, b, c) {
    return Math.max(a, b, c) < (a + b + c) / 2;
};
function isTriangleVer3(a, b, c) {
    if (a <= 0 || b <= 0 || c <= 0 || a + b <= c || c + b <= a || a + c <= b) {
        return false;
    }
    return true;
}
//* Beginner - Reduce but Grow #8kyu
//? Given a non-empty array of integers, return the result of multiplying the values together in order.
// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
function grow(x) {
    return x.reduce(function (acc, el) { return acc * el; });
}
function growVer2(x) {
    return eval(x.join('*'));
}
var arr = [1, 2, 3, 4];
console.log(growVer2(arr));
//* Are they the "same"? #6kyu
//? Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.
function comp(a1, a2) {
    if (a1 == null || a2 == null || a1.length !== a2.length) {
        return false;
    }
    a1.sort(function (a, b) { return a - b; });
    a2.sort(function (a, b) { return a - b; });
    return a1.map(function (x) { return x * x; }).every(function (value, idx) { return value === a2[idx]; });
}
var c = [1, 2, 3];
var d = [1, 4, 9];
var a = [121, 144, 19, 161, 19, 144, 19, 11];
var b = [121, 14641, 20736, 361, 25921, 361, 20736, 361];
console.log(comp(c, d));
function comp2(array1, array2) {
    if (array1 == null || array2 == null)
        return false;
    array1.sort(function (a, b) { return a - b; });
    array2.sort(function (a, b) { return a - b; });
    return array1.map(function (v) { return v * v; }).every(function (v, i) { return v == array2[i]; });
}
function comp3(a, b) {
    return (!!a &&
        !!b &&
        a
            .map(function (x) { return x * x; })
            .sort()
            .join() == b.sort().join());
}
//* Sum of odd numbers #7kyu
//? Given the triangle of consecutive odd numbers:
//?              1
//?           3     5
//?        7     9    11
//?    13    15    17    19
//? 21    23    25    27    29
//? ...
//* Calculate the sum of the numbers in the nth row of this triangle (starting at index 1)
// 1 -->  1
// 2 --> 3 + 5 = 8
function rowSumOddNumbers(n) {
    var cantidad = 0;
    var arr = [];
    for (var i = 1; i < n; i++) {
        cantidad += i;
    }
    for (var i = 1; i < cantidad * 2 + n * 2; i++) {
        if (i % 2 !== 0) {
            arr.push(i);
        }
    }
    return arr.splice(cantidad).reduce(function (acc, el) { return acc + el; });
}
function rowSumOddNumbers2(n) {
    return Math.pow(n, 3);
}
//* Growth of a Population #7kyu
//? In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater than or equal to p = 1200 inhabitants?
// At the end of the first year there will be:
// 1000 + 1000 * 0.02 + 50 => 1070 inhabitants
// At the end of the 2nd year there will be:
// 1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)
// At the end of the 3rd year there will be:
// 1141 + 1141 * 0.02 + 50 => 1213
// It will need 3 entire years.
// p0 = poblacion inicial
// percent = porcentaje de crecimiento
// aug = llegada de habitantes
// p = poblacion final
// function nbYear(p0: number, percent: number, aug: number, p: number) {
//   let years = 1;
//   let hab = Math.floor(p0 + p0 * (percent / 100) + aug);
//   while (hab < p) {
//     hab = Math.floor(hab + hab * (percent / 100) + aug);
//     years++;
//   }
//   return years;
// }
function nbYear(p0, percent, aug, p) {
    var years = 0;
    while (p0 < p) {
        p0 = Math.floor(p0 + p0 * (percent / 100) + aug);
        years++;
    }
    return years;
}
console.log(nbYear(1500, 5, 100, 5000));
// console.log(nbYear(1500000, 2.5, 10000, 2000000));
// console.log(nbYear(1500000, 0.25, 1000, 2000000));
// console.log(nbYear(1000, 2.0, 50, 1214));
// mi funcion de while pero con un for
function nbYear2(p0, percent, aug, p) {
    for (var years = 0; p0 < p; years++) {
        p0 = Math.floor(p0 + (p0 * percent) / 100 + aug);
    }
    return years;
}
//* Get the Middle Character
//? You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
// "test" --> "es"
// "testing" --> "t"
// "middle" --> "dd"
function getMiddle(s) {
    var sample = s.split('');
    var n = Math.floor(sample.length / 2);
    return sample.length % 2 === 0 ? sample[n - 1] + sample[n] : sample[n];
}
function getMiddle2(s) {
    var sample = s.split('');
    var m = Math.ceil(sample.length / 2) - 1;
    return s.slice(m, s.length - m);
}
function getMiddle3(s) {
    while (s.length > 2) {
        s = s.slice(1, -1);
    }
    return s;
}
var str = 'testing';
var str2 = 'middle';
console.log(getMiddle2(str));
console.log(getMiddle2(str2));
