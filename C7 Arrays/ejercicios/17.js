function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  const sum = arrayOfNums.reduce((p,c)=>p+c);
  return sum;
}

module.exports = agregarNumeros;
agregarNumeros([10, 10, 16])