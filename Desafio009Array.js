// Escreva uma função que receba dois parametros, o primeiro é um array e o segundo será o valor a ser removido do array.

const removeItems = (arr, item) => {
    //iterando sobre o array recebido
    for(i = 0; i < arr.length; i++) {
        //localizando o item
        if(arr[i] == item) {
            //removendo o item
            arr.splice(i, 1);
            i--;
        }
    }
    return arr;
}

console.log(removeItems([1, 2, 3, 4, 5, 5, 5, 5, 5], 5));
console.log(removeItems([1, 2, 3, 4, false, false, false, false, false], false));
console.log(removeItems([1, 2, 3, 4, 'false', 'false', 'false', 'false', 'false'], 'false'));

console.log("\n============Forma2===============");

const removeItems2 = (arr, b) => {
    const filtered = []
    for(const item of arr) {
        if(item !== b) {
            filtered.push(item);
        }
    }
    return filtered;
}

console.log(removeItems2([1, 2, 3, 4, 5, 5, 5, 5, 5], 5));
console.log(removeItems2([1, 2, 3, 4, false, false, false, false, false], false));
console.log(removeItems2([1, 2, 3, 4, 'false', 'false', 'false', 'false', 'false'], 'false'));

console.log("\n============Forma3===============");

const removeItems3 = (arr, b) => {
    return arr.filter(item => item !== b);
}

console.log(removeItems3([1, 2, 3, 4, 5, 5, 5, 5, 5], 5));
console.log(removeItems3([1, 2, 3, 4, false, false, false, false, false], false));
console.log(removeItems3([1, 2, 3, 4, 'false', 'false', 'false', 'false', 'false'], 'false'));