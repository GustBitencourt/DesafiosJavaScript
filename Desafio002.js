//Escreva uma função que retorne o tipo de valor da variavel

function checkVarType(a) {
    return typeof a;
}

console.log(checkVarType(1));
console.log(checkVarType(false));
console.log(checkVarType({}));
console.log(checkVarType("Vai Corinthians!"));
console.log(checkVarType([1, 'Bahia', true]));