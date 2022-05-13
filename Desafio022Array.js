//Função que recebe array de string como parametros,
// - agrupando pela primeira letra
// - retorne um objeto que contém chaves
// - representando a primeira letra e valores
// - deve ser arrays strings relativos as letras iniciais

function letterString(array) {
    return array.reduce((prevValues, currentValue) => {
        const key = currentValue[0].toLowerCase();

        if(key in prevValues) {
            prevValues[key] = [...prevValues[key], currentValue];

        } else {
            prevValues[key] = [currentValue];
        }

        prevValues[key].sort();

        return prevValues;

    }, {});

}

console.log(letterString([
    "Argentina",
    "Brasil",
    "Colombia",
    "Chile",
    "Espanha",
    "França",
    "Italia",
    "Portugal",
    "Uruguai",
    "Venezuela",
    "EUA",
    "Canadá",
    "Bolivia",
    "Paraguai",
]));