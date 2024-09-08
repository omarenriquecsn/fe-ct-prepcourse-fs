function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el array es vacío o si no hay números faltantes.
  // Tu código:
  let numero2=[];
  let valorf = 0;
  for (var i = numeros[0]; i <= numeros[numeros.length-1]; i++){
    numero2.push(i);
  }
  if(numero2.length === numeros.length){return null;}
  else for( var i = 0; i <= numero2.length-1; i++){if(numero2[i]!==numeros[i]){return numero2[i]; break;}}
}

module.exports = encontrarNumeroFaltante;
encontrarNumeroFaltante([1, 2, 3, 4, 6, 7, 8, 9]);
encontrarNumeroFaltante([1, 3, 4, 5, 6, 7, 8, 9]);
encontrarNumeroFaltante([1, 2, 3, 4, 5, 6, 7, 8, 10]);

  encontrarNumeroFaltante([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
    40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57,
    58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75,
    76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93,
    94, 95, 96, 97, 98, 99, 100])