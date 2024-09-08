function tieneEmail(objetoUsuario) {
  // Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
  // En ese caso, retorna true. Caso contrario, false.
  // Tu código:
  let v = Object.keys(objetoUsuario);
  if(objetoUsuario['email'] === null || !v.includes('email')  ){console.log(0);return false}
  else console.log(1); return true
}
tieneEmail({ usernombre: 'Jhon', email: null })
module.exports = tieneEmail;
