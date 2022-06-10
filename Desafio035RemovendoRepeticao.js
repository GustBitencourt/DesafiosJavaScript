//Escreva uma função que recebe uma string como parametro e retorna um array sem repeticao de caracteres

/**
 * 
 * @description Em um loop adicionamos os caracteres verificando se não é igual o anterior 
 */
function removingRepetitions(string) {
    const items = [];
    for(const caracter of string) {
        if(items.length === 0 || items[items.length - 1] !== caracter) {
            items.push(caracter);
        }
    }
    return items;
}

console.log(removingRepetitions("aaabbbcccdddeeeaaavvv"));
console.log(removingRepetitions("ABBCcAD"));
console.log(removingRepetitions([1, 2, 2, 3, 3, 3, 4, 5, 5, 1]));

console.log("\n=======Solução2==========\n");

function removingRepetitions2(string) {
    return [...string].filter((item, index) => {
        return item !== string[index - 1];
    })
}

console.log(removingRepetitions2("aaabbbcccdddeeeaaavvv"));
console.log(removingRepetitions2("ABBCcAD"));
console.log(removingRepetitions2([1, 2, 2, 3, 3, 3, 4, 5, 5, 1]));