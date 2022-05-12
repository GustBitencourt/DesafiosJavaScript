// função retorna true se o número é par e false se for impar

function oddEven(n) {
    return n % 2 === 0 ? true : false;
}

console.log(oddEven(10));
console.log(oddEven(7));

console.log("\n================Forma2================\n");

function oddEven2(n) {
    return n % 2 === 0;
}

console.log(oddEven2(10));
console.log(oddEven2(7));
