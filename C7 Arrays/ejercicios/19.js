function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:
  let product = [];
  if(arguments.length === 0){return 0;}
  else
  for(var i = 0; i <= arguments.length-1; i++){
    product.push(arguments[i]);
  }
  const pro = product.reduce((p,c)=> p*c);
  console.log(pro);
  return pro;
  }

module.exports = multiplicarArgumentos;
multiplicarArgumentos(5, 5)