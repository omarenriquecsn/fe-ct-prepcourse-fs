function ordenarArray(array) {
  // Ordena los elementos del areglo array de menor a mayor.
  // Devuelve el arreglo resultante.
  // Tu código:
  console.log(array.sort());
if(typeof(array)=== "object"){
return array.sort();
}
else
{let list = array.sort(function(a,b){return a-b});
return list;}

}

module.exports = ordenarArray;
ordenarArray(['perro', 'gato', 'elefante', 'jirafa', 'mono'])
