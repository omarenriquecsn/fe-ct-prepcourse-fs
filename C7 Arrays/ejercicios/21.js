function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  let ene = array.includes('Enero');
  let mar = array.includes('Marzo');
  let nov = array.includes('Noviembre');
  let mes= [];
  for(var i = 0; i <= array.length-1; i++){
   if(array[i] === "Enero") {mes.push("Enero");}
   else if(array[i] === "Marzo") {mes.push("Marzo");}
   else if(array[i] === "Noviembre") {mes.push("Noviembre");}
  }
  if(ene === true && mar === true && nov === true){console.log(mes);return mes;}
  else console.log(1); return  "No se encontraron los meses pedidos";

}

module.exports = mesesDelAño;
mesesDelAño([ 'Marzo',
  'Diciembre',
  'Abril',
  'Junio',
  'Julio',
  'Noviembre',
  'Enero',
  'Mayo',
  'Febrero'])

