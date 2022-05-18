//Escreva uma função que recebe dois parametros um DATE e uma STRING e retorna a data formatada.
/*
-Sendo:
dd - dia com 2 digitos
MM - mes com 2 digitos
MMM - mes com tres letras
yyyy - ano com 4 digitos
HH - hora com 2 digitos
mm - minutos com 2 digitos
ss - segundos com 2 digitos
*/

function formatDate(date, string) {
    const fullDate = new Date(date);

    //mes 3 letras
    const monthShort = getMonthShort(fullDate, true);

    //pegando o dia com o digito
    let result = string.replace('dd', twoDigits(fullDate.getDate()));

    //pegando o mes caso não exista MMM ele troca pelo mes curto - começar por aqui para não excluir a possibilidade de achar ja que se começar por MM não poderemos encontrar o MMM
    result = result.replace("MMM", monthShort);
    result = result.replace('MM', twoDigits(fullDate.getMonth() + 1)); //usando two digitis no month 

    //mesmo caso do mes começar a procura pelo de maior referencia
    result = result.replace("yyyy", fullDate.getFullYear());
    result = result.replace("yy", fullDate.toLocaleString('pt-BR', { year: '2-digit' }));

    //pegando a hora minuto e segundo com two digit
    result = result.replace('HH', twoDigits(fullDate.getHours()));
    result = result.replace('mm', twoDigits(fullDate.getMinutes()));
    result = result.replace('ss', twoDigits(fullDate.getSeconds()));

    return result;
        
}

function getMonthShort(date, upperCaseFirst = false) {
    //mes com 3 letras
    //slice para retirar ponto do final
    const monthShort = date.toLocaleString(
        'pt-BR',
        { month: 'short' }
    ).slice(0, -1);

    if (upperCaseFirst) {
        // retorna a primeira letra do mes em maiuscula escolhendo o primeiro caractere com charAt e somando com o slice excluindo a primeira letra
        return monthShort.charAt(0).toUpperCase() + monthShort.slice(1);
    }

    return monthShort;
}

function twoDigits(number) {
    //padstart para colocar algo no inicio caso não tenha irá colocar 0.
    return String(number).padStart(2, '0');
}


console.log(formatDate(new Date(2022, 4, 25, 10, 0 ,0), "dd/MM/yyyy HH:mm:ss"));
console.log(formatDate(new Date(2022, 4, 25, 10, 0 ,0), "dd/MMM/yy HH:mm"));
console.log(formatDate(new Date(2022, 4, 25, 10, 0 ,0), "dd/MMM HH:mm"));