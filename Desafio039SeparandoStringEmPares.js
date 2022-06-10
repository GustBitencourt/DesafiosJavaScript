// Escreva uma função que recebe uma STRING e separe as letras em pares, caso a ultima letra não tenha par coloque um _ no lugar

/**
 * 
 * @description Separa as letras em pares, caso a ultima letra não tenha par coloque um _ no lugar
 * - verificamos primeiro se a quantidade de letras é impar caso seja, adicionamos um _ no final
 * - no while separamos as letras em pares e adicionamos no array
 */
function splitWords(str) {
    let i = 0;
    let result = [];

    if (str.length % 2 !== 0) {
        str += '_';
    }

    while (i < str.length) {
        result.push(str[i] + str[i + 1]);
        i += 2;
    }

    return result;
}

console.log(splitWords('abc'));
console.log(splitWords('abcdefgh'));
console.log(splitWords('abcdefg'));


console.log("\n==========Solução 2==========");

function splitWords2(str) {
    return (str + '_').match(/.{2}/g) || [];
}

console.log(splitWords2('abc'));
console.log(splitWords2('abcdefgh'));
console.log(splitWords2('abcdefg'));