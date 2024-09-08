function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  const sum = resultadosTest.reduce((p,c)=> p+c);
  const larg = resultadosTest.length;
  return sum / larg

}

module.exports = promedioResultadosTest;
