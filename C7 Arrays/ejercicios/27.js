function dePalabrasAFrase(palabras) {
  // El argumento "palabras" es un arreglo de strings.
  // Retorna un string donde todas las palabras estén concatenadas,
  // con un espacio entre cada palabra.
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
  // Tu código:
  const todas = palabras.reduce((p,c) => p+" "+c);
  return todas;

}

module.exports = dePalabrasAFrase;
dePalabrasAFrase(['Henry', 'JavaScript', 'Class'])