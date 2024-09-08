function saludo(idioma) {
  // Retornar un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!".
  // Si "idioma" es "mandarin", devuelve "Ni Hao!".
  // Si "idioma" es "ingles", devuelve "Hello!".
  // Si "idioma" no es ninguno de los anteriores o es `undefined`, devuelve "Hola!".
  // Tu código:
  let lengua = ['aleman', "Guten Tag!", "mandarin","Ni Hao!", "ingles", "Hello!"]
  if ( lengua.includes(idioma)){ return lengua[lengua.indexOf(idioma)+1];}
  else return "Hola!";
}

module.exports = saludo;
saludo("ingles")