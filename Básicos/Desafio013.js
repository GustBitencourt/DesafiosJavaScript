//Escreva uma função que receba dois parametros numéricos, MIN e MAX e retorne um arrat de acordo com o intervalo entre eles.
//INPUT (1, 5) => OUTPUT [1, 2, 3, 4, 5]


function setNumbet(min, max) {
    let array = [];
    for (i = min; i <= max; i++) {
        array.push(i)
    }
    return array;
}

console.log(setNumbet(1, 5))
console.log(setNumbet(-4, 10))


console.log("\n================== SOLUÇÃO 2==================")

function setNumber2(min, max) {
    //Recursividade incrementa min até ficar igual a max
    return min === max ? [min] : [min].concat(setNumber2(min + 1, max))
}

console.log(setNumber2(1, 5))
console.log(setNumber2(-4, 10))

console.log("\n================== SOLUÇÃO 3==================")

function setNumber3(min, max) {
    //Preenche todos os valores com o menor que existe, após faz um map para incrementar os próximos valores
    return Array(max - min + 1)
            .fill(min)
            .map((prev, next) => prev + next)
}

console.log(setNumber3(1, 5))
console.log(setNumber3(-4, 10))

console.log("\n================== SOLUÇÃO 4==================")

function setNumber4(min, max) {
    //Array . from podemos passar as configurações do array, realiza um callback ignorando o valor e pegando a chave retornando chave + 1 
    return Array.from({ length: max - min +1 }, (_, key) => key + min);
}

console.log(setNumber4(1, 5))
console.log(setNumber4(-4, 10))