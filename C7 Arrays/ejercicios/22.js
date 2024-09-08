function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:
  let num = 1;
  let mult = [];
  for(var i = 0; i*6 <= 60; i++){
  num = 6*i;
  mult.push(num);
  console.log(num)
  }
  return mult;
}

module.exports = tablaDelSeis;
tablaDelSeis()