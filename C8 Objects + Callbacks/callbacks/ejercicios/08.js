const buscarElemento = (array, callback) => {
  // Busca un elemento en el array y retornalo.
  // Si el elemento no se encuentra, devuelve el mensje "No se encontró el elemento".
  // La función de callback es la encargada de evaluar si el elemento fue encontrado.
  // Tu código:
  let arr = [];
  for(var i = 0; i < array.length; i++){
    arr.push(callback(array[i]));
  }
  if (arr.includes(true)){console.log(array[arr.indexOf(true)]);return array[arr.indexOf(true)]}
  else return "No se encontró el elemento";
}

    const array1 = [];
    const callback1 = element => element === 6;
    buscarElemento(array1, callback1)
module.exports = buscarElemento;