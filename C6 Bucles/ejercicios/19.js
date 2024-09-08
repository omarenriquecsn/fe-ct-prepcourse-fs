function sumarHastaN(n) {
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Tu código:
  let sum=[n];
  while(n  > 0){
    n--;
    sum.push(n);

  }
  const suma = sum.reduce((p,c)=>(p+c));
  return suma;
}

module.exports = sumarHastaN;
sumarHastaN(10)