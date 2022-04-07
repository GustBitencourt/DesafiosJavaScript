/*
Escreva uma função que receba dois parametros (text, flag)
- Se flag for igual a start retorne os 3 primeiros caracters do text
- Se flag for igual a end retorne os 3 ultimos caracters do text
- Se text for menor que 3 deve retornar o text
*/

function flagText(text, flag = "start") {
    if (text.length < 3) {
        return text;
    }

    if (flag === 'start') {
        return text.substring(0, 3);
    }

    if (flag === 'end') {
        return text.substring(text.length - 3);
    }
}

console.log(flagText("abcdefg", "start"));
console.log(flagText("abcdefg", "end"));
console.log(flagText("ab", "end"));
console.log(flagText("abcdefg"));

console.log("\n===========Forma2 Com SLice============");
function flagText2(text, flag = "start") {
    if (text.length < 3) {
        return text;
    }

    if (flag === 'start') {
        return text.slice(0, 3);
    }

    if (flag === 'end') {
        return text.slice(text.length - 3); //posso passar só -3
    }
}

console.log(flagText2("abcdefg", "start"));
console.log(flagText2("abcdefg", "end"));
console.log(flagText2("ab", "end"));
console.log(flagText2("abcdefg"));

console.log("\n===========Forma3 Uma linha============");
function flagText3(text, flag = "start") {
    return text.length < 3 ? text : (flag === 'start' ? text.slice(0, 3) : text.slice(- 3));
}

console.log(flagText3("abcdefg", "start"));
console.log(flagText3("abcdefg", "end"));
console.log(flagText3("ab", "end"));
console.log(flagText3("abcdefg"));