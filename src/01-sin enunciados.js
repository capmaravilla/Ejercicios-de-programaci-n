function findNb(m) {
  let counter = 0;
  let i = 0;

  while (i < m) {
    i += Math.pow(counter + 1, 3);
    console.log(i);
    // i += (counter + 1) ** 3;
    counter++;
  }
  if (i === m) {
    return counter;
  }
  return -1;
}
// TODO Bucle While y reducción de codigo en las operaciones

function findNb2(m) {
  var n = 0;
  while (m > 0) m -= (++n) ** 3;
  return m ? -1 : n;
}
// console.log(findNb(225));

function orderWeight(strng) {
  strng = strng
    .trim()
    .split(' ')
    .sort((a, b) => {
      let aElement = a
        .split('')
        .map(u => parseInt(u))
        .reduce((acc, el) => acc + el);

      let bElement = b
        .split('')
        .map(u => parseInt(u))
        .reduce((acc, el) => acc + el);

      if (aElement === bElement) {
        return a.localeCompare(b);
      }

      if (aElement < bElement) {
        return -1;
      }

      if (aElement > bElement) {
        return 1;
      }
      return 0;
    });

  return strng.join(' ');
}

// console.log(orderWeight('2000 11 22 10003'));
//'11 11 2000 10003 22'

function longestConsec(strarr, k) {
  if (k <= 0 || k > strarr.length) {
    return '';
  }

  let longest = '';
  for (i = 0; i <= strarr.length - k; i++) {
    let current = strarr.slice(i, i + k).join('');
    if (current.length > longest.length) {
      longest = current;
    }
  }

  return longest;
}

// const arr = ['uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho'];
// console.log(longestConsec(arr, 3));

function longestConsec2(strarr, k) {
  if (k <= 0 || k > strarr.length) {
    return '';
  }

  return strarr
    .map((value, index) => strarr.slice(index, index + k).join(''))
    .reduce((longest, current) =>
      current.length > longest.length ? current : longest
    );
}

function findUniq(arr) {
  let repNum;
  if (arr[0] === arr[1]) {
    repNum = arr[0];
  } else if (arr[0] != arr[1] && arr[0] == arr[2]) {
    repNum = arr[0];
  } else if (arr[0] != arr[1] && arr[0] != arr[2]) {
    repNum = arr[1];
  }

  const uniq = arr.find(u => u != repNum);

  return uniq;
}

const array = [0, 0, 0.55, 0, 0];
const array2 = [3, 10, 3, 3, 3];

function findUniq3(arr) {
  return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
}

// TODO Ordena para buscar una asimetria

function findUniq2(arr) {
  arr.sort((a, b) => a - b);
  return arr[0] == arr[1] ? arr.pop() : arr[0];
}

function litres(time) {
  return typeof time === 'number ' || time >= 0
    ? Math.floor(time * 0.5)
    : 'Inserta un valor valido!';
}

function oddOrEven(array) {
  if (array.length === 0) return 'even';
  return array.reduce((acc, el) => acc + el) % 2 === 0 ? 'even' : 'odd';
}

// const arr = [];
// console.log(oddOrEven(arr));

// TODO reduce(), la importancia del valor inicial
// Era igual que la mia pero no puse el valor inicial por lo que tuve que enguarrar con un if
function oddOrEven2(arr) {
  return arr.reduce((a, b) => a + b, 0) % 2 ? 'odd' : 'even';
}
// console.log(oddOrEven2(arr));

function century(year) {
  return typeof year === 'number' ? Math.ceil(year / 100) : 'Data error';
}

console.log(century(895));

function century2(year) {
  return ((year + 99) / 100) | 0;
}
// TODO Truncar un valor con | 0, quitar los decimales, igual que con Math.floor()
// El truncamiento de un número en JavaScript se refiere a eliminar la parte decimal de un número, dejando solo la parte entera. En el contexto del código proporcionado, el operador | 0 se utiliza para truncar el resultado de la división (year + 99) / 100, eliminando cualquier parte decimal y dejando solo la parte entera del resultado.
// El uso de | 0 es una forma común de truncar números en JavaScript, pero existen otras formas de lograr el mismo resultado, como utilizar funciones como Math.trunc() o parseInt(). Sin embargo, el operador | 0 es una técnica compacta y eficiente para truncar números en muchas situaciones.
