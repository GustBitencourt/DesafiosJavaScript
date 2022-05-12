//função recebe dois arrays como parametros e retorna um array sem valores repetidos

function newArray(arrayA, arrayB) {
    let togetherArray = [...arrayA, ...arrayB];
    return [...new Set(togetherArray)];
}
console.log(newArray([1, 2, 3, 4, 5], [1, 2, 3, 4, 5, 6, 7, 8, 9]));


console.log("\n============Forma2===============");
function newArray(arrayA, arrayB) {
    let togetherArray = arrayA.concat(arrayB);
    return [...new Set(togetherArray)];
}
console.log(newArray([1, 2, 3, 4, 5], [1, 2, 3, 4, 5, 6, 7, 8, 9]));

console.log("\n============Forma3===============");

function newArray(arrayA, arrayB) {
    let togetherArray = arrayA.concat(arrayB);
    return Array.from(new Set(togetherArray));
}
console.log(newArray([1, 2, 3, 4, 5], [1, 2, 3, 4, 5, 6, 7, 8, 9]));