function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:
   const aleatorio = array[Math.abs(Math.floor(Math.random()*array.length))];
   console.log(aleatorio);
  return aleatorio;
   
}

module.exports = obtenerElementoAleatorio;
obtenerElementoAleatorio([1,2,3,4,5])