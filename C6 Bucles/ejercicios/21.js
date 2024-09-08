function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:
  let pot = [];
  var num = numero;
  while(num > 2){
    num = num/2;
    pot.push(num);
    }
    if(pot.includes(2)){console.log(true); return true;}
    else if(numero === 2){console.log(true); return true}
    else console.log(false); return false;
 }

module.exports = esPotenciaDeDos;
esPotenciaDeDos(2)
