function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   let nuev=[];

   arrayOfStrings.forEach(element => {element.split(''); if(element[0] === "a"){nuev.push(element)} });
   return nuev;
   }

filter([
   'abajo',
   'pera',
   'escalera',
   'alerta',
   'indice',
   'azteca',
   'arbol',
   'buzo',])
module.exports = filter;
