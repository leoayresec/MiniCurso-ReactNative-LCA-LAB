// exercício 4
// 4.1

const arr = [1, 2, 3, 4, 5, 6];
let [ y, ...x] = arr;
console.log(y)
console.log(x)

const soma =  (x,y,...z) => (x +y) + z.reduce((acum, elem) => (acum + elem));
  
let rest = soma(1,2,3,4,5);
console.log(rest);

