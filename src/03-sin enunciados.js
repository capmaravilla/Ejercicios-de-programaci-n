// TODO Utilización de includes()
function check(a, x) {
  return a.includes(x);
}

function fakeBin(x) {
  arr = [];
  for (el of x) {
    arr.push(el);
  }
  return arr.map(u => (u >= 5 ? 1 : 0)).join('');
}

function fakeBin2(x) {
  return x
    .split('')
    .map(n => (n < 5 ? 0 : 1))
    .join('');
}

function greet() {
  return 'hello world!';
}

function persistence(num) {
  let counter = 0;
  let current = num;
  while (current >= 10) {
    current = Array.from(String(current), Number);
    current = current.reduce((acc, el) => acc * el);
    counter++;
  }
  return counter;
}

function persistence2(num) {
  let counter = 0;
  let current = num;
  while (current >= 10) {
    current = current
      .toString()
      .split('')
      .reduce((acc, el) => acc * el);
    counter++;
  }
  return counter;
}

var summation = function (num) {
  let counter = 0;
  for (i = 1; i <= num; i++) {
    counter += i;
  }
  return counter;
};

function accum(s) {
  let str = s.toLowerCase();
  str = str.split('');
  strFinal = [];
  for (el in str) {
    strFinal.push(str[el].toUpperCase());
    for (i = 0; i < el; i++) {
      strFinal.push(str[el]);
    }
    strFinal.push('-');
  }
  strFinal.pop();
  return strFinal.join('');
}

// TODO Con map() modificamos y repetimos valores
function accum2(s) {
  return s
    .split('')
    .map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
    .join('-');
}

// const list = [
//   '1:0',
//   '2:0',
//   '3:0',
//   '4:0',
//   '2:1',
//   '3:1',
//   '4:1',
//   '3:2',
//   '4:2',
//   '4:3',
// ];

function points(games) {
  let score = 0;
  for (el of games) {
    el = el.split('');
    if (el[0] > el[2]) {
      score += 3;
    } else if (el[0] == el[2]) {
      score += 1;
    }
  }
  return score;
}

//TODO Ejercio interesante con reduce()
function points2(games) {
  games.reduce((output, current) => {
    return (output +=
      current[0] > current[2] ? 3 : current[0] === current[2] ? 1 : 0);
  }, 0);
}

//TODO Usando parseInt para sacar los numeros de '1:2'
function points3(games) {
  return games.reduce((output, current) => {
    let x = parseInt(current[0]);
    let y = parseInt(current[2]);
    let value = x > y ? 3 : x === y ? 1 : 0;
    return output + value;
  }, 0);
}

const nums = [1, 2, 3, 4];

function findAverage(array) {
  return array.length === 0
    ? 0
    : array.reduce((acc, el) => acc + el, 0) / array.length;
}
