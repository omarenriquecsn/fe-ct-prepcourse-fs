function fizzBuzz(num) {
  // Si "num" es divisible entre 3, retorna "fizz".
  // Si "num" es divisible entre 5, retorna "buzz".
  // Si "num" es divisible entre 3 y 5 (ambos), retorna "fizzbuzz".
  // De lo contrario, retorna false.
  // Tu código:
  
  if (num % 3 ===0 && num % 5 === 0){console.log(3);return "fizzbuzz";}
  else if (num % 3 === 0) {console.log(1);return "fizz";}
  else if ( num % 5 === 0){console.log(2);return "buzz";}
  else console.log(4); return false;
  }

module.exports = fizzBuzz;
fizzBuzz(15)
