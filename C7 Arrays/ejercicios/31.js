function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:
let spl = [];
let inv = [];
spl = texto.split('');
 for(var i = 0; i <= spl.length-1; i++){
  inv.unshift(spl[i]);
 }
inv = inv.join('');
 console.log(inv);
 return inv;
}

module.exports = invertirTexto;
invertirTexto('hola')