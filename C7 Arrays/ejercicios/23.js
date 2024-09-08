function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retórnarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y retornar el string: "Se interrumpió la ejecución".
  // Tu código:
  let array = [];
  let dos = num;
  for (var i = 0; i <= 9; i++){
    dos = dos + 2;
    array.push(dos);
    if(dos === array.length){break;}
  }
 if(array.length < 10){console.log(1);return "Se interrumpió la ejecución";}
 else {console.log(array); return array;}
}

module.exports = breakStatement;
breakStatement(-4)