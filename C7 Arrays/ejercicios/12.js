function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  let mayúsculas= [];
  let str ="";
  for (var i = 0; i <= array.length-1; i++){
   str = array[i].toUpperCase();
   mayúsculas.push(str);
  }
  return mayúsculas;
}

module.exports = convertirStringAMayusculas;
convertirStringAMayusculas(['hello'])