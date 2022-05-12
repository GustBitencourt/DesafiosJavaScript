// ESCREVA uma função que recebe dois parametros A e B do tipo DATE e a diferença de dias entre elas

function getDaysBetweenDates(dateA, dateB) {
    //constante com um dia - 1000 milisegundos é igual a um segundo, 60 segundos, 60 minutos, 24 horas
    const ONE_DAY = 1000 * 60 * 60 * 24;
    return Math.abs((dateA.getTime() - dateB.getTime()) / ONE_DAY);

}

console.log(getDaysBetweenDates(new Date('2022/04/01'), new Date('2022/04/07')));
console.log(getDaysBetweenDates(new Date('2022/06/06'), new Date('2022/10/16')));