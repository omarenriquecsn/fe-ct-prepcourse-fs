function esAnagrama(str1, str2) {
   // La función recibe dos argumentos "str1" y "str2" que son strings.
   // Determina si los dos strings son anagramas.
   // Devuelve true de ser así, sino retorna false.
   // IMPORTANTE: Un anagrama es una palabra que se forma
   // con las mismas letras que otra, pero en orden diferente.
   // Tu código:
   let s1 = str1.toLowerCase();
   let s2 = str2.toLowerCase();
   s1 = s1.split('');
   s2 = s2.split('');
  let tr = [];
 s1.forEach(element => {if(s2.includes(element)){tr.push(true)}
   });
   if(s1.length && s2.length === tr.length){
    return true;}
    else if(str1 === str2){
      return true;}
      else return false;

}
esAnagrama('', '')
module.exports = esAnagrama;
