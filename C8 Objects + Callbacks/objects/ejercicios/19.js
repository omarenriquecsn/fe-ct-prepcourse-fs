function pasarUsuarioAPremium(objetoMuchosUsuarios) {
  // El parámetro "objetoMuchosUsuarios" es un arreglo de objetos (usuarios).
  // Cada usuario tiene una propiedad llamada "esPremium".
  // Define esta propiedad de todos los usuarios como true.
  // Retornar el arreglo.
  // Tu código:
  let esp = []
  for(var i = 0 ; i < objetoMuchosUsuarios.length; i++){
    let v = { esPremium: true }
    esp.push(v)  
  }
  return esp;
}
const users = [
  { esPremium: false },
  { esPremium: false },
  { esPremium: false },
  { esPremium: false },
  { esPremium: false },
];
pasarUsuarioAPremium(users)
module.exports = pasarUsuarioAPremium;
