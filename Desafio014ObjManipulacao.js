//Escreva uma função que receba um array de objetos sendo cada objeto os dados de um endereço separado em address, city, state, country, zipcode.
//retorne formatado da seguinte forma "ADDRESS, CITY - STATE, ZIPCODE, COUNTRY"

const data = [
    {
        addres: "Rua 1",
        city: "São Paulo",
        state: "SP",
        zipcode: "01234-567",
        country: "Brasil"
    },
    {
        addres: "Rua 10",
        city: "Bahia",
        state: "BA",
        zipcode: "43210-098",
        country: "Brasil"
    },{
        addres: "Rua 15",
        city: "Porto Alegre",
        state: "RS",
        zipcode: "76543-210",
        country: "Brasil"
    },
]

function formatData(arr) {
    return arr.map(data => `${data.addres}, ${data.city} - ${data.state}, ${data.zipcode}, ${data.country}`);
}

console.log(formatData(data));


console.log("\n============Solução2===============");
function formatData2(arr) {
    return arr.map(data => `${data.addres}, ${data.city} - ${data.state}, ${data.zipcode}, ${data.country}`);
}

console.log(formatData2(data));
