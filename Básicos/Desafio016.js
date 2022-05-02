//Escreva uma função que receba dois arrays(A e B) como parametro e crie um objeto onde as PROPIEDADES/CHAVES sejam os itens do array A e os valores sejam os itens do array B retorne um objeto

function makeObjectFromArray(arr1, arr2) {
  let obj = {};
  for (let i = 0; i < arr1.length; i++) {
    obj[arr1[i]] = arr2[i];
  }
  return obj;
}

console.log(makeObjectFromArray(["a", "b", "c"], [1, 2, 3]));
console.log(makeObjectFromArray(["w", "x", "y", "z"], [10, 20, 30, 40]));
console.log(makeObjectFromArray([1, "b"], ["a", 2]));

console.log("\n============Solução2===============");
function makeObjectFromArray2(arr1, arr2) {
  //spread iterator para retornar um objeto só
  return Object.assign(...arr1.map((key, index) => ({ [key]: arr2[index] })));
}

console.log(makeObjectFromArray2(["a", "b", "c"], [1, 2, 3]));
console.log(makeObjectFromArray2(["w", "x", "y", "z"], [10, 20, 30, 40]));
console.log(makeObjectFromArray2([1, "b"], ["a", 2]));

console.log("\n============Solução3===============");
function makeObjectFromArray3(arr1, arr2) {
    //reduce oega objeto e chave e index atual passando no final o valor inical de um objetovazio
  return arr1.reduce((obj, key, index) =>     
    ({ ...obj, [key]: arr2[index] }), {});
}

console.log(makeObjectFromArray3(["a", "b", "c"], [1, 2, 3]));
console.log(makeObjectFromArray3(["w", "x", "y", "z"], [10, 20, 30, 40]));
console.log(makeObjectFromArray3([1, "b"], ["a", 2]));

console.log("\n============Solução4===============");
function makeObjectFromArray4(arr1, arr2) {
    
  return Object.fromEntries(arr1.map((key, index) => [key, arr2[index]]));
}

console.log(makeObjectFromArray4(["a", "b", "c"], [1, 2, 3]));
console.log(makeObjectFromArray4(["w", "x", "y", "z"], [10, 20, 30, 40]));
console.log(makeObjectFromArray4([1, "b"], ["a", 2]));
