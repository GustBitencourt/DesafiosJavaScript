// função que verifique o fechamaento de colchetes, chaves e parenteses

/**
 * 
 * @param {*} string 
 * @returns {boolean}
 * @description 
 *  - Se for um carctere de abertura adiciona ao stack
 *  - Senão removemos o caractere de fechamento seja correspondente ao de abertura 
 */
function verifyCloses(string) {
    const matches = { "(" : ")", "[" : "]", "{" : "}" };
    const stack = [];

    for(const currentCaracter of string) {
        if(currentCaracter in matches) {
            stack.push(currentCaracter);

        } else {
            if (currentCaracter !== matches[stack.pop()]) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

console.log(verifyCloses("(){}[]"));
console.log(verifyCloses("([{}])"));
console.log(verifyCloses("(}"));
console.log(verifyCloses("[(])"));
console.log(verifyCloses("[({})](]"));
console.log(verifyCloses("[]"));

console.log("\n=======Solução2==========\n");

//Exemplo com regex
function verifyCloses2(string) {
    while (/\(\)|\[\]|\{\}/g.test(string)) {
        string = string.replace(/\(\)|\[\]|\{\}/g, "")
    }
    return !string.length;
}

console.log(verifyCloses2("(){}[]"));
console.log(verifyCloses2("([{}])"));
console.log(verifyCloses2("(}"));
console.log(verifyCloses2("[(])"));
console.log(verifyCloses2("[({})](]"));
console.log(verifyCloses2("[]"));


