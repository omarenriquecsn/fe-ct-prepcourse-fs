function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:
  let res = [];
  let num = numero
 for( var i = 1; i < num+1; i++){
  numero = (num)/i;
  res.push(Number.isInteger(numero));
 }
const result = res.reduce((a,b) => ((a[b]= a[b]+1||1),a),[]);
if(result[true]>2){console.log(false);return false;}
else console.log(true); return true;
}
module.exports = esNumeroPrimo;
esNumeroPrimo(5)