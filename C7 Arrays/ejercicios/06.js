function invertirArray(array) {
  // Invierte el arreglo array recibido por argumento.
  // Tu código:
  let list = [];
  for(var i = array.length-1; i >= 0; i--){
 list.push(array[i]);
 
  }
  return list;
}

module.exports = invertirArray;
invertirArray([1,2,3,4])