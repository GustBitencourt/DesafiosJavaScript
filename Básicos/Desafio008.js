//Escreva uma função que recebe um array de parametro e remove os três primeiros elementos, se tiver menos de tres elementos retornar vazio

function returnArray(arr) {
    if (arr.length < 3) {
        return [];
    } else {
        arr.splice(0, 3);
        return arr;
    }
}

console.log(returnArray([1, 2, 3, 4, 5]));
console.log(returnArray([5, 4, 3, 2, 1, 0]));
console.log(returnArray([10, 20, 30]));
console.log(returnArray([99, 100]));

console.log("\n==========Forma2==========");
function returnArray2(arr) {
    return arr.length > 3 ? arr.slice(3) : [];
}

console.log(returnArray2([1, 2, 3, 4, 5]));
console.log(returnArray2([5, 4, 3, 2, 1, 0]));
console.log(returnArray2([10, 20, 30]));
console.log(returnArray2([99, 100]));