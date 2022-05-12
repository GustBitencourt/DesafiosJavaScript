//crie função que receba uma array de numeros como primeiro parametro e um numero B como segundo, realize a soma de todos os numeros maiores que B no array e retorne o resultado.

function arrSum(arr, b) {
    return arr.reduce(function(valorPrev, valorAtual) {
        //se o valoratual for maior que b realiza a soma, se não retorna apenas o valor previo
        return valorAtual > b ? valorPrev + valorAtual : valorPrev;

    }, 0)

}

console.log(arrSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
console.log(arrSum([1, 2, 3, 4, 5, 6, 7, 8], 3));
console.log(arrSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 9));
console.log(arrSum([100, 200, 300, 400, 500, 600, 700, 800, 900], 500));