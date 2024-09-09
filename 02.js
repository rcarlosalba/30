let baseNumber = prompt('Ingresa un número');
baseNumber = baseNumber.split('');

let numeros = [];
for (let i = 0; i < baseNumber.length; i++) {
  numeros.push(parseInt(baseNumber[i]));
}

let reverse = [...numeros].reverse();

numeros = numeros.join('');
reverse = reverse.join('');

if (numeros === reverse) {
  console.log(true);
} else {
  console.log(false);
}
