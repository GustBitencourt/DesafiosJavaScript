//Escreva uma função que recebe dois parametros String(duas letras) e retorna true se as letras são ambas maiusculas ou ambas minúsculas, ou false caso contrário.

function compareLetter(l1, l2) {
    //l1
    const l1UpperCase = l1 === l1.toUpperCase();
    const l1LowerCase = l1 === l1.toLowerCase();
    //l2
    const l2UpperCase = l2 === l2.toUpperCase();
    const l2LowerCase = l2 === l2.toLowerCase();

    return (l1UpperCase && l2UpperCase) || (l1LowerCase && l2LowerCase);

}

console.log(compareLetter('A', 'a'));
console.log(compareLetter('z', 'a'));
console.log(compareLetter('Z', 'X'));
console.log(compareLetter('Z', 'x'));