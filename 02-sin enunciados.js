function evenOrOdd(number) {
  return number % 2 === 0 ? 'even' : 'Odd';
}
console.log(evenOrOdd());

function addBinary(a, b) {
  return (a + b).toString(2);
}

console.log(addBinary(5, 6));

// TODO Si usamos toString(2) lo pasaremos a codigo binario

function XO(str) {
  let xCount = 0;
  let oCount = 0;
  let sample = str.toLowerCase();
  for (el of sample) {
    if (el == 'x' || el == 'o') {
      el === 'x' ? xCount++ : oCount++;
    }
  }
  return xCount === oCount;
}

// TODO Usando match() para contar elementos con los parametros /x/gi
// /x para el valor y //gi g para global i sin case sensitive
function XO2(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}

// TODO Para contar el elemento divide el array donde se encuentra y luego cuenta los trozos, le saldra uno más
function XO3(str) {
  return (
    str.toLowerCase().split('x').length === str.toLowerCase().split('o').length
    // divide el array cada x y luego cuenta las division totales comparando con las divisiones de o
  );
}

function past(h, m, s) {
  if (h <= 23 && m <= 59 && s <= 59 && h >= 0 && m >= 0 && s >= 0) {
    return (h * 3600 + m * 60 + s) * 1000;
  }
  return 'Error';
}

function booleanToString(b) {
  return b === true ? 'true' : 'false';
}

// TODO Condicionales usando booleans
function booleanToString2(b) {
  return b ? 'true' : 'false';
}

// TODO Pasamos un boolean toString()
function booleanToString3(b) {
  return b.toString();
}

function booleanToString4(b) {
  return String(b);
}
// console.log(booleanToString(false));

function sumTwoSmallestNumbers(numbers) {
  numbers.sort((a, b) => a - b);
  return numbers[0] + numbers[1];
}

function removeChar(str) {
  let sample = [];
  for (el of str) {
    sample.push(el);
  }
  sample.shift();
  sample.pop();
  sample = sample.join('');
  return sample;
}

// TODO Remover el primer y ultimo caracter con poco código
function removeChar2(str) {
  return str.slice(1, -1);
}

function removeChar3(str) {
  return str.substring(1, str.length - 1);
}

function invert(array) {
  return array.map(u => u * -1);
}

function invert2(array) {
  return array.map(x => -x);
}

function invert3(array) {
  return array.map(x => (x === 0 ? x : -x));
} //para que no me salga el 0 negativo

function printerError(s) {
  const sample = [];
  for (el of s) {
    if (el > 'm') sample.push(el);
  }
  return `${sample.length}/${s.length}`;
}

function printerError2(s) {
  var count = 0;
  for (var i = 0; i < s.length; i++) {
    if (s[i] > 'm') {
      count++;
    }
  }
  return count + '/' + s.length;
}

// TODO Usando replace para un recuento de errores
function printerError3(s) {
  return `${s.replace(/[a-m]/gi, '').length}/${s.length}`;
}
