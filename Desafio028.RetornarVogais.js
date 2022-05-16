//Função recebe string e retorna quantidade de vogais

function howManyVowels(string) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;

    //for passando por todas as letras
    for (const letters of string) {
        //for passando por vogais para incluir maiusculas e minusculas
        for (const vowel of vowels) {
            if (letters.toLowerCase() === vowel) {
                count++;
            }
        }
    }

    return count;
}

console.log(howManyVowels("abAcaxi"));
console.log(howManyVowels("Bahia"));
console.log(howManyVowels("xyz"));
console.log(howManyVowels("CARAI"));


console.log("\n==========Método ============");
function howManyVowels3(string) {
    //aeiou global e ignorque maiusculas e minusculas
    const regexVowels = /[aeiou]/gi;

    //evita a quebra do array retornando vazio
    if (!string.match(regexVowels)) {
        return 0;

    } else {
        return string.match(regexVowels).length
    }
}

console.log(howManyVowels3("abacaxi"));
console.log(howManyVowels3("Bahia"));
console.log(howManyVowels3("xyz"));
console.log(howManyVowels3("CARAI"));