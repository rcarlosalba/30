const texto = prompt('Ingresa la palabra').toLowerCase().trim();
let texArr = texto.split('');
const vocales = ['a', 'e', 'i', 'o', 'u'];

function contarVocales(arr) {
  let contador = 0;
  for (let i = 0; i < arr.length; i++) {
    if (vocales.includes(arr[i])) {
      contador++;
    }
  }
  return contador;
}
const totalVocales = contarVocales(texArr);
console.log(`La palabra ${texto} tiene ${totalVocales} vocales`);
