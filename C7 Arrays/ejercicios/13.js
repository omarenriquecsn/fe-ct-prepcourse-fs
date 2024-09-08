function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  let pares = [];
  for (var i = 0; i <= array.length; i++){
    if(array[i]%2 === 0){
      pares.push(array[i]);
    }
   
  }
  console.log(pares);
  return pares;
}

module.exports = filtrarNumerosPares;
filtrarNumerosPares([2, 4, 6])