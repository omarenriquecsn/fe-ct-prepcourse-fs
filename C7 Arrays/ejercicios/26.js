function encontrarPrimerMultiploDeN(n, secuencia) {
  // La función recibe un numero "n" y un array de números "secuencia" como argumentos.
  // Devuelve el primer múltiplo de n que encuentres en la secuencia de números.
  // Usa un break para detener el bucle una vez halles el múltiplo.
  // Tu código:
  let mult = undefined;
  for(var i = 0; i <= secuencia.length - 1; i++){
if(secuencia[i]%n === 0){mult = secuencia[i];break;}
console.log(i);
  }
  return mult;
}

module.exports = encontrarPrimerMultiploDeN;
encontrarPrimerMultiploDeN(5,[1, 2, 3, 4, 5, 6, 7, 8, 9])