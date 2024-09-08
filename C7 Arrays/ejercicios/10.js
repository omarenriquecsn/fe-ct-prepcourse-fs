function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:
  for (var i = 0; i <= array.length - 1; i++){
    let uno = array[i].length;
    if (uno >= 5){console.log(array[i]); return array[i];}
  }
}

module.exports = obtenerPrimerStringLargo;
obtenerPrimerStringLargo([
  'hello', 'world', 'this', 'is', 'a', 'test'
])

