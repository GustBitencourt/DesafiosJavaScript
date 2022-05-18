/* Escreva uma função que recebe uma STRING como parametro ela deve receber palavras separadas por traço ou underline e retornar em formato camelCase.
*/

function camelCase(str) {
    const parts = str.includes('_') ? str.split('_') : str.split('-');

    return parts.reduce((prev, current, index) => {
        return prev + (index > 0 ? current.charAt(0).toUpperCase() + current.slice(1) : current);
    })
}

console.log(camelCase('hello-world'));
console.log(camelCase('bora_com_voce'));
console.log(camelCase('vai-corinthians'));

console.log("\n==============Forma2==================");

function camelCase2(str) {
    //regex pra encontra o traco e underline, funçao pra ignorar primeiro caracter
    return str.replace(/[-_]\w/gi, function(match) {
        return match[1].toUpperCase();
    })
}

console.log(camelCase2('hello-world'));
console.log(camelCase2('bora_com_voce'));
console.log(camelCase2('vai-corinthians'));