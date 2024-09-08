function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  let lista = [];
  let val = 0;
  for (var i = 0; i <= array.length-1; i++){
  lista.push(array[i]*i);
  }
  return lista;
}

module.exports = multiplicarElementosPorIndice;
multiplicarElementosPorIndice([1, 2, 3, 4, 5])