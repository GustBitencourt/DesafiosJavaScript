//escreva uma função que receba um [ARRAY de numeros] 
//ordene os impares de forma ascendente e os pares em sua posição original

/**
 * 
 * @description Ordena apenas os impares deixando os pares em sua posição original
 * - separamos os impares e o ordenamos de maneira crescente
 * - utilizamos o map para substituir os impares pelos valores ordenados
 */

const sortOdds = (array) => {
    const odd = array
        .filter(number => number % 2 !== 0)
        .sort((a, b) => a - b);
    
    return array.map((index) => {
        return (index % 2 !== 0 ? odd.shift() : index);
    })

}

console.log(sortOdds([7, 1]));
console.log(sortOdds([5, 8, 6, 3, 4]));
console.log(sortOdds([9, 8, 7, 6, 5, 4, 3, 2, 1]));