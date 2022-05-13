//escreva uma função que recebe DOIS PARAMETROS sendo um ARRAY de STRINGS e uma STRING retorne um novo array com os itens que contem a STRING

function filter (arr, string) {
    //normalize para lidar com as string, replace com REGEX trocando todos os acentos e deixando a palavra "LIMPA" e comparando com a string através do metodo includes
    return arr.filter(item => item.normalize('NFD')
                                    .replace(/[\u0300-\u036f]/g, "")
                                    .toLowerCase().includes(string.toLowerCase()));
}


const array = ['Bahia', 'Corinthians', 'Manchester United', 'Palmeiras', 'São Paulo', 'Vasco da Gama', 'Manchester City', 'Arsenal', 'Chelsea', 'Aston Villa', 'West Ham', 'Leeds', 'Everton', 'Liverpool', 'Atlético Mineiro', 'Atlético Paranaense', 'Atlético Goianiense', 'Vitória', 'Flamengo', 'Botafogo', 'Santos', 'Fluminense', 'Grêmio', 'Ajax'];

console.log(filter(array, 'as'))
console.log(filter(array, 'fl'))
console.log(filter(array, 'an'))
console.log(filter(array, 'en'))
console.log(filter(array, 'atl'))