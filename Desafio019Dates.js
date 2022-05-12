// Função recebe dois parâmetros A = DATE e B = number, adicione b na quantidade de dias em A

function sumDays(date, days) {
    //retorna em milisegundos - necessário fazer o retorno separado
    date.setDate(date.getDate() + days);

    return date;
}

console.log(sumDays(new Date('2022/04/01'), 7));
console.log(sumDays(new Date('2022/04/01'), 700));
console.log(sumDays(new Date('2022/04/01'), -10));