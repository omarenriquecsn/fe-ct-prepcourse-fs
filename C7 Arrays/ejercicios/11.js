function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  
  let doble = [];
  let mult = 1;
  for (var i = 0; i <= array.length-1; i++){
    mult= 2 * array[i];
    doble.push(mult);
 
}
console.log(doble)
return doble;
}
module.exports = duplicarElementos;
duplicarElementos([]);