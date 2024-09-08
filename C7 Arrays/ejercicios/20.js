function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  const prod = array.reduce((p,v)=> p+v);
let prom = prod/array.length;
if(prom === array[0]){return true;}
else return false
}

module.exports = todosIguales;
