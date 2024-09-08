function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código
  let y = [];
  if(a === 0 || b == 0){console.log(0); return 0}
  else if(a === b){return a}
    else {
while(b>a-1){
  b--;
  y.push(b+1)}
  console.log(y);
}
const res = y.reduce((p,c)=>p*c);
console.log(res);
return Math.abs(res);
}
module.exports = productoEntreNúmeros;
productoEntreNúmeros(-5,5);