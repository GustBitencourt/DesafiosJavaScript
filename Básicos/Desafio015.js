// Escreva uma função que receba dois parametro (A, B) A sendo um OBJETO e B uma string.
//retorne TRUE se o objeto A conter a propriedade/chave com o nome passado em b, caso contrário retorne FALSE;

function checkKey(obj, key) {
    return obj.hasOwnProperty(key);
}

console.log(checkKey({a: 1, b: 2, c: 3}, "b"));
console.log(checkKey({x: 'a', y: 'b', z: 'c'}, "a"));
console.log(checkKey({x: 'a', y: 'b', z: 'c'}, "z"));

console.log("\n============Solução2===============");
function checkKey2(obj, key) {
    //porém quando o valor for undefined retornara falso
    return obj[key] !== undefined;
}

console.log(checkKey2({a: 1, b: 2, c: 3}, "b"));
console.log(checkKey2({x: 'a', y: 'b', z: 'c'}, "a"));
console.log(checkKey2({x: 'a', y: 'b', z: 'c'}, "z"));

console.log("\n============Solução3===============");
function checkKey3(obj, key) {
    return key in obj;
}

console.log(checkKey3({a: 1, b: 2, c: 3}, "b"));
console.log(checkKey3({x: 'a', y: 'b', z: 'c'}, "a"));
console.log(checkKey3({x: 'a', y: 'b', z: 'c'}, "z"));