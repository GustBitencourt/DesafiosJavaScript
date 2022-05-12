//Escreva uma função que receba 6 parametros onde A soma com B, Subtraia por C, Multiplique por D, divida por E e eleve a potencia de F.

const result = (a, b, c, d, e, f) => {
    let total;
    total = a + b;
    total -= c;
    total *= d;
    total /= e;
    total **= f;
    return total;
}

const forma2 = (a, b, c, d, e, f) => {
    return (((a + b) - c) * d / e) ** f;
}

console.log(result(6, 5, 4, 3, 2, 1));
console.log(result(6, 2, 1, 4, 2, 3));
console.log(result(2, 3, 6, 4, 2, 3));
console.log("\n===========Forma2============")
console.log(forma2(6, 5, 4, 3, 2, 1));
console.log(forma2(6, 2, 1, 4, 2, 3));
console.log(forma2(2, 3, 6, 4, 2, 3));