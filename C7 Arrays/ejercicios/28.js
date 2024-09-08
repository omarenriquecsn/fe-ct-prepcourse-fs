function esArrayNoVacio(arr) {
  // La función recibe un argumento "arr".
  // Comprueba si este argumento es un array y si tiene al menos un elemento.
  // Si es así, retorna true, de lo contrario, retorna false.
  // Tu código:
 if(Array.isArray(arr) && arr.length>= 1){console.log(1);return true;}
 else console.log(2); return false;
  console.log(Array.isArray(arr));
}

module.exports = esArrayNoVacio;
esArrayNoVacio('not an array');
esArrayNoVacio([1, 2, 3]);
esArrayNoVacio([])