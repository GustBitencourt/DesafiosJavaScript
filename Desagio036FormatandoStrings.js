//Escreva uma função que recebe duas strings como paremetro a primeira é o nome de um filme mal formatado e a segunda uma lista de palavra delimitadas por espaço que devem ser sempre colocadas em letras minusculas no filme EXCETO a primeira letra

function movieTitleFormat(title, minorWords) {
    if(!title) return "";

    const minor = minorWords ? minorWords.toLowerCase().split(" ") : [];

    const words = title.toLowerCase().split(" ");

    words.map((word, index) => {
        if(minor.indexOf(word) === -1 || index === 0) {
            return word[0].toUpperCase() + (word.length > 1 ? word.slice(1) : "");
            
        } else {
            return word;
        }
    });
    
    return words.join(" ");
}

console.log(movieTitleFormat("o pOderoso CHEFAO", "o de"));
console.log(movieTitleFormat("O magiCO DE OZ", "o de"));
console.log(movieTitleFormat("o silencio DOS INOCENTES", "O de Dos"));

console.log("\n================SOLUÇÃO 02================");
function movieTitleFormat2(title, minorWords) {
    minorWords = (minorWords || "").toLowerCase().split(" ");

    title = title.toLowerCase();

    return title.replace(/(\w)\w*/g, (word, firstLetter, index) => {
        if(index === 0 || minorWords.indexOf(word) === -1) {
            word = word.replace(firstLetter, firstLetter.toUpperCase());
        }
        
        return word;
    })



}

console.log(movieTitleFormat2("o pOderoso CHEFÃO", "o de"));
console.log(movieTitleFormat2("O magiCO DE OZ", "o de"));
console.log(movieTitleFormat2("o silencio DOS INOCENTES", "O de Dos"));