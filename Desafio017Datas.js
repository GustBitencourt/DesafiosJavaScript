// ESCREVA uma função que recebe dois parametros A e B do tipo DATE e retorne TRUE se as datas forem iguais
// Datas só podem ser comparadas com o sinal de === através do get time, caso contrário apenas com sinal de maior e menor


function areDatesEqual(dateA, dateB) {
    return dateA.getTime() === dateB.getTime();
}

function areDatesEqual2(dateA, dateB) {
    return dateA.toString() === dateB.toString();
}

console.log(areDatesEqual(new Date('2022/06/06 20:23:00'), new Date('2022/06/06 20:23:00')));
console.log(areDatesEqual(new Date('2022/06/25 20:20:00'), new Date('2022/06/25 20:23:00')));
console.log(areDatesEqual(new Date('2021/06/25 20:23:00'), new Date('2022/06/25 20:23:00')));