// escreva uma função que recebe dois objetos SETs como parametros, retornenando um novo SET com o item criado

function joinSets(set1, set2) {
    
    return new Set([...set1, ...set2]);     
}

console.log(joinSets(new Set(['a', 'b', 'c']), new Set(['c', 'd', 'e'])));
console.log(joinSets(new Set([1, 2, 3]), new Set([3, 4, 5])));
console.log(joinSets(new Set([false, false, NaN]), new Set([true, true, NaN])));
console.log(joinSets(new Set("1234"), new Set("3456")));

const resultString = joinSets(new Set("1234"), new Set("3456"));
console.log([...resultString].join(""));