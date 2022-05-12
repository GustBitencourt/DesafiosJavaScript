/*
    Função que recebe duas strings A e B, e retorna a quantidade de vezes que a string A aparece em B
*/

function howManyTimes(A, B) {
    let count = 0;
    for (let i = 0; i < B.length; i++) {
        if (B[i] == A) {
            count++;
        }
    }
    return count;
}

console.log(howManyTimes("a", "banana"));
console.log(howManyTimes("r", "O rato roeu a roupa do rei de roma"));

console.log("\n==========Forma2==========");
function howManyTimes2(A, B) {    
    return B.match(new RegExp(A, "gi")).length - 1;
}

console.log(howManyTimes2("a", "banana"));
console.log(howManyTimes2("r", "O rato roeu a roupa do rei de roma"));

console.log("\n==========Forma3==========");
function howManyTimes2(A, B) {    
    return B.toLowerCase().split(A.toLowerCase()).length - 1;
}

console.log(howManyTimes2("a", "banana"));
console.log(howManyTimes2("r", "O rato roeu a roupa do rei de roma"));
