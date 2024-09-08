function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  let nue = [];
  for(var i = 0; i <= numeros.length; i++){
    nue.push(numeros[i]);
    if(nue.includes(numeros[i+1])){console.log(numeros[i+1]); return numeros[i+1]; break;}
    else if(nue.length=== numeros.length){return undefined}
  }
}

module.exports = encontrarElementoRepetido;
encontrarElementoRepetido([1, 2, 3, 4, 5, 1])