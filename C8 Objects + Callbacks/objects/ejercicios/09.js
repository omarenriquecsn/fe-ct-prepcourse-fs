function nuevoUsuario(nombre, email, password) {
  // Debes crear un nuevo objeto.
  // Este debe tener las propiedades: "nombre", "email" y "password" con sus respectivos valores.
  // Retorna el objeto creado.
  // Tu código:
  let obj = {
    nombre,
    email,
    password
  }
  console.log(obj);
  return obj;
}
nuevoUsuario('omar' , 'omarenriquecs', 1234)
module.exports = nuevoUsuario;
