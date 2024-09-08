function contarParesConContinue(numeros) {
  // La función recibe un array de numeros por argumento.
  // Devuelve la cantidad de números pares que hay en el array.
  // Evita los impares utilizando continue.
  // Tu código:
  let num = [];
  for(var i = 0; i < numeros.length; i++){
    if(numeros[i]%2 === 0){
      num.push(numeros[i]);}
      else continue;
    
   
  
  }
 return num.length;
}

module.exports = contarParesConContinue;
contarParesConContinue([2, 3, 5])