function combine(str1, str2, str3) {
  // Esta función debe combinar de forma alternada cada caracter de cada string.
  // La función recibe 3 argumentos. Solo debe contabilizar aquellos que NO esten vacíos.
  // Los strings pueden tener cualquier tamaño.
  // EJEMPLOS
  // combine("abc", "", "123") == "a1b2c3"
  // combine("abc", "12345", "") == "a1b2c345"
  // combine("abc", "12345", "67") == "a16b27c345"
  // Tu código:
  str1 = str1.split('');
  str2 = str2.split('');
  str3 = str3.split('');
  let max = Math.max(str1.length,str2.length,str3.length);
  let uni = [];
  for(var i = 0; i <= max-1; i++){
    uni.push(str1[i]);
    uni.push(str2[i]);
    uni.push(str3[i]);
  }
  const result = uni.filter(uni => uni != undefined);
  const res = result.join('');
  return res;
}

module.exports = combine;
combine('a', '12', 'xyz')