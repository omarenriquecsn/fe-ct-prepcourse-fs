function sort(sortBy, list) {
   // La función sort recibe dos parámetros:
   // sortBy: una letra (string).
   // list: un arreglo de objetos.
   // La función deberá devolver la lista de objetos ordenada de forma DESCENDIENTE
   // a partir de la letra recibida. Por ejemplo:
   // recibes --> ("a", [{ a: 1, b: 3 }, { a: 3, b: 2 }, { a: 2, b: 40 }])
   // retorna --> [{ a: 3, b: 2 }, { a: 2, b: 40 }, { a: 1, b: 3 }]
   // Tu código:
   let lst = [];
   for(var i = 0; i< list.length; i++){
    lst.push(Object.values(list[i]))  
   }
   lst = lst.sort(([p, c],[d, b]) => d-p);
   let lst1 = [];
   for(var i =0; i<lst.length;i++){
   let aux = lst[i]
   lst1.push({a:aux[0], b:aux[1]});
   }
   //for(var i = 0; i < lst.length; i++){}
   return lst1;
}
sort("a", [{ a: 1, b: 3 }, { a: 3, b: 2 }, { a: 2, b: 40 }]);
module.exports = sort;
