function sumarHastaNConBreak(n) {
   // La función recibe un numero n por argumento.
   // Devuelve la suma de todos los números desde 1 hasta n.
   // Si la suma supera a 100, detén el bucle usando break.
   // Tu código:
   let sum =[];
   for( var i = 1; i <= n; i++){
      sum.push(i);
      const suma = sum.reduce((p,c)=>(p+c));
      if(suma > 99){break};
   }
   const suma = sum.reduce((p,c)=>(p+c));
   console.log(suma);
   return suma;   
}

module.exports = sumarHastaNConBreak;
sumarHastaNConBreak(5)