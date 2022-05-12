// Função que recebe dois ARRAYS como PARAMETROS e retorne um OBJETO onde A será a CHAVE e B será o VALOR
//Caso A tenha menos elementos, considere apenas os seus correspondentes
//caso B tenha menos elementos, considere seu valor com null

function arrayToObject(array1, array2) {
    const obj = {};

    for(let i = 0; i < array1.length; i++) {
        //gerando as chaves
        const key = array1[i];

        //inserindo os valores
        obj[key] = array2[i] || null;
    }

    return obj;
}

console.log(arrayToObject(['a', 'b', 'c'], [1, 2, 3]));
console.log(arrayToObject(['g', 'h', 'i'], [100, 2, 33]));
console.log(arrayToObject(['a', 'b'], [1, 2, 3]));
console.log(arrayToObject(['g', 'h', 'i', 'j', 'k', 'l'], [10, 22, 33]));


console.log("\n============Solução2===============");
function arrayToObject2(array1, array2) {
    return Object.fromEntries(array1.map((key, index) => [key, array2[index] || null]));
}

console.log(arrayToObject2(['a', 'b', 'c'], [1, 2, 3]));
console.log(arrayToObject2(['g', 'h', 'i'], [100, 2, 33]));
console.log(arrayToObject2(['a', 'b'], [1, 2, 3]));
console.log(arrayToObject2(['g', 'h', 'i', 'j', 'k', 'l'], [10, 22, 33]));