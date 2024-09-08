function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:
  let sep = string.split('');
  let inv = [];
  for(var i = 0; i <= sep.length-1; i++){
    inv.unshift(sep[i]);
  }
  sep = sep.join('');
  inv = inv.join('');
  console.log(sep);
  console.log(inv);
  if(sep === inv){console.log(inv);return true;}
  else return false;
}

module.exports = esPalindromo;
esPalindromo('ana')