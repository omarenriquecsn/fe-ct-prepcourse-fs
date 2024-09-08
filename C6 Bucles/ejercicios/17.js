function colors(color) {
  // La función recibe un color. Retorna el string correspondiente:
  // En caso que el color recibido sea "blue"   --> "This is blue".
  // En caso que el color recibido sea "red"    --> "This is red".
  // En caso que el color recibido sea "green"  --> "This is green".
  // En caso que el color recibido sea "orange" --> "This is orange".
  // Si no es ninguno de esos colores           --> "Color not found".
  // PISTA: utilizar el statement SWITCH.
  // Tu código:
  let colores= ["blue", "This is blue", "red", "This is red", "green", "This is green", "orange", "This is orange"];
  if (colores.includes(color)){return colores[colores.indexOf(color) + 1]}
  else return "Color not found";
}

module.exports = colors;
