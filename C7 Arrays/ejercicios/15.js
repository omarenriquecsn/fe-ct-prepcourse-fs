function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  let max = Math.max(...array);
  if(array.length === 0){ return 0;}
  else  return array.indexOf(max);
 
}

module.exports = encontrarIndiceMayor;
encontrarIndiceMayor([1, 2, 3, 4, 5])