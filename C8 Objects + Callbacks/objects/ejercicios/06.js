const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:
  //let list = Object.keys(objeto);
  //return list.length;
  let list = [];
  for( var i in objeto){list.push(i)}
  console.log(list);
  return list.length;
};
const obj1 = { a: 1, b: 2, c: 3 }
contarPropiedades(obj1)
module.exports = contarPropiedades;
