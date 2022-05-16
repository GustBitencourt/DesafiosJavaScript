//escreva uma função que recebe um numero e retorne ele arredondado com duas casas decimais

//se for esperado arredondamento
function numberFix(num) {
    return num.toFixed(2);
}

console.log(numberFix(2.5));
console.log(numberFix(2.12345));
console.log(numberFix(1.4567));
console.log(numberFix(15.4547));
console.log(numberFix(18.987));

console.log("\n==========Método 2============");
//caso o arredondamento não seja necessário
function numberFix2(num) {
    return Number(Math.trunc(num + 'e2') + 'e-2').toFixed(2);
}

console.log(numberFix2(2.5));
console.log(numberFix2(2.12345));
console.log(numberFix2(1.4567));
console.log(numberFix2(15.4547));
console.log(numberFix2(18.987));