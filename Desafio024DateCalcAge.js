//escreva uma função que receba uma data e retorna a idade formatada

function youHaveYears(date) {
    // pega a data zero 1970/01/01
    const dateZero = new Date(0);

    //cria uma data com a diferença entre data atual e o aniversário
    const difMiliSeconds = new Date(Date.now() - date.getTime());

    //diferença com UTC para retornar corretamente caso a data do aniversário ainda não tenha passado
    const years = (difMiliSeconds.getUTCFullYear() - dateZero.getUTCFullYear());

    return `You have ${years} years old`;
}

console.log(youHaveYears(new Date("1996-07-25")));
console.log(youHaveYears(new Date("1991-07-06")));
console.log(youHaveYears(new Date("1998-09-15")));
console.log(youHaveYears(new Date("1900-09-15")));