function continueStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un array y retornarlo.
  // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
  // se continúa con la siguiente iteración.
  // PISTA: Utiliza el statement 'continue'.
  // Tu código:
  let array = [];
  let dos = num;
  for (var i = 0; i <= 9; i++){
    if(i === 4){continue;}
    else
    dos = dos + 2;
    array.push(dos);
    
}
console.log(array);
return array;
}


module.exports = continueStatement;
continueStatement(-4)
