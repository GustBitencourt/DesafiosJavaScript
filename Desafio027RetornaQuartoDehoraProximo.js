//Função recebe uma data e retorna o quarto de hora mais proximo em minutos

function nextFifteenMinutes(date) {
    const minutes = date.getMinutes();

    //ternario de multiplos ifs
    return minutes < 15 ? 15 : minutes < 30 ? 30 : minutes < 45 ? 45 : 0;
}


console.log(nextFifteenMinutes(new Date(2022, 4, 21, 6, 14, 00)));
console.log(nextFifteenMinutes(new Date(2022, 4, 21, 6, 22, 00)));
console.log(nextFifteenMinutes(new Date(2022, 4, 21, 6, 31, 00)));
console.log(nextFifteenMinutes(new Date(2022, 4, 21, 6, 55, 00)));
