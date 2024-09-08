function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
  // El parámetro "objetoMisterioso" posee una propiedad con el nombre "numeroMisterioso".
  // Debes multiplicar este número por 5 y retornar el resultado.
  // Tu código:
  let val = Object.values(objetoMisterioso)
  val = val.map((a) => a * 5)
  return val[0];
}
const objetoMisterioso = {
  numeroMisterioso: 999,
};
multiplicarNumeroDesconocidoPorCinco(objetoMisterioso)
module.exports = multiplicarNumeroDesconocidoPorCinco;
