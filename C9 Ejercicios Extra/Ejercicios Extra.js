/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:
  let key = Object.keys(objeto);
  let val = Object.values(objeto);
  let result1 = [];
  let result2 = [];
  let result = [result1,result2]
  for(var i = 0; i < 1; i++){result1.push(key[i]); result1.push(val[i]);}
  for(var i = 1; i < 2; i++){result2.push(key[i]); result2.push(val[i]);}
  return result;
}
deObjetoAarray({ x: 1, y: 2 })

function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:
  let obj = {};
let sep = string.split('')
let uni = [];
let val = [];
let sum = [];
let u = 0 ;
sep.forEach(element => {if(uni.includes(element)=== false){uni.push(element)}});
for(var i = 0 ; i < uni.length; i++){
  u = uni[i];
  val = sep.filter((element)=> element === u);
  sum.push(val.length);
  val = [];
     }
     uni.forEach(element => {
      obj[element]=sum[uni.indexOf(element)]
      });
      return obj;

}
numberOfCharacters("adsjfdsfsfjsdjfhacabcsbajda")
function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:
  let sep = string.split('');
  let may = [];
  let min = [];
  let result= [];
  sep.forEach(element => {if(element === element.toUpperCase()){may.push(element)}
  else min.push(element);
    
  });
  may = may.join('');
  min = min.join('');
  return may+min;
}
capToFront("soyHENRY")
function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:
let sep = frase.split(' ');
let alr = [];
for(var i  =  0; i < sep.length; i++){
  let u =sep[i].split('');
  let y = [];
  u.forEach(element => {y.unshift(element)});
  y = y.join('');
  alr.push(y);
}
return alr.join(' ');
}
asAmirror("The Henry Challenge is close!")
function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:
numero1 = numero.toString();
num = numero.toString() ;
num = num.split("");
num = num.reverse();
num = num.join('')
if(num === numero1){ return "Es capicua"}
else return "No es capicua";

console.log(num);
}
capicua(12341)
function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:
  let abc = ['a','b','c'];
  let sep = string.split('');
  let result = [];
  for(var i = 0 ; i < sep.length; i++){if(abc.includes(sep[i])){continue;}
else result.push(sep[i]);}
result = result.join('');
return result;
}
deleteAbc('abcefgh')
function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings. 
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:
let array = [];

array = arrayOfStrings.sort((a,b)=>a.length-b.length);

return array;

}
sortArray(["You", "are", "beautiful", "looking"] )
function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:
  let común = [];
  array1.forEach(element => {if(array2.includes(element)){común.push(element)}});
  return común;
}
buscoInterseccion([4,2,3], [1,3,4])
/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
