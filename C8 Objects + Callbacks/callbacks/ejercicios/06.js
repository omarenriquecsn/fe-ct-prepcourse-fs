const forEach = require("./05");

function map(array, cb) {
  // Itera sobre el arreglo y por cada elemento, pasárselo como argumento al callback.
  // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
  // Retorna el nuevo arreglo.
  // Tu código:
  let nue = [];
  array.forEach(element => {nue.push(cb(element)); });
  return nue;
    
 
}

module.exports = map;
