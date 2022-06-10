// função que recebe uma STRING como parametro e conte as letras duplicadas independente de ser maiuscula ou minuscula

/**
 * 
 * @description função que recebe uma STRING como parametro e conte as letras duplicadas independente de ser maiuscula ou minuscula
 * - utilizamos o Array.from para transformar a string em um array de caracteres aplicando lowercase para ignorar o case
 * - utilizamos o reduce para gerar um objeto onde a chave é o caractere e o valor é a quantidade de vezes que o caractere aparece
 * - finalmente filtramos os caracteres que repetiram mais de uma vez e retornamos a quantidade de caracteres repetidos
 */
function countLetters(string) {
    if(!string) return 0;

    const letters = Array.from(string.toLowerCase());

    const counter = letters.reduce((prev, current) => {
        prev[current] = prev.hasOwnProperty(current) ? prev[current] + 1 : 1;
        
        return prev;
    }, {});

    return Object.values(counter).filter(value => value > 1).length;
}

console.log(countLetters('abcdefg'));
console.log(countLetters('aabbccde'));
console.log(countLetters('aAbBcd'));
console.log(countLetters('pAraLelepiPedo'));


console.log("\n=============Solução2===============")

//com regex
function countLetters2(string) {
    return (
        string
            .toLowerCase()
            .split('')
            .sort()
            .join('')
            .match(/([^])\1+/g) || []
    ).length;
}

console.log(countLetters2('abcdefg'));
console.log(countLetters2('aabbccde'));
console.log(countLetters2('aAbBcd'));
console.log(countLetters2('pAraLelepiPedo'));