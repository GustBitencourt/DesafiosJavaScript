//Escreva umas função que recebe dois valores A e B. Essa função deve retornar true se forem Iguais e do mesmo tipoe e false se forem diferentes.


function checkEqual(a, b) {
    if (a === b) {
        return true;
    } else {
        return false;
    }
}

console.log(checkEqual(2, 3));
console.log(checkEqual(3, 3));
console.log(checkEqual('1', 1));
console.log(checkEqual('10', '10'));