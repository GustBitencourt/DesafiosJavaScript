/* Formatar o array com nome de pessoas de maneira parecida com o Facebook
    - Ninguém curtiu ainda
    - Steve curtiu isso
    - Steve, Amanda e mais 2 curtiram
 */

const facebookLike1 = (arr) => {
    let msg = "No one like this yet";

    if (arr.length > 0) {
        if (arr.length === 1) {
            msg = `${arr[0]} like this`;
    
        } else if (arr.length === 2) {
            msg = `${arr[0]} and ${arr[1]} like this`;
    
        } else if (arr.length === 3) {
            msg = `${arr[0]}, ${arr[1]} and ${arr[2]} like this`;
    
        } else { //colocando o numero de pessoas que curtiram
            msg = `${arr[0]}, ${arr[1]} and ${arr.length - 2} others like this`;
        }
    }

    return msg;
}



console.log (facebookLike1([]));
console.log (facebookLike1(["JP"]));
console.log (facebookLike1(["JP", "Isa"]));
console.log (facebookLike1(["JP", "Isa", "Pedro"]));
console.log (facebookLike1(["JP", "Isa", "Pedro", "Victor", "Pam", "Nubia", "Samuel"]));

console.log("\n==========Solução 2==============");

const facebookLike2 = (arr) => {
    switch (arr.length) {
        case 0:
            return "No one like this yet";
        case 1:
            return `${arr[0]} like this`;
        case 2:
            return `${arr[0]} and ${arr[1]} like this`;
        case 3:
            return `${arr[0]}, ${arr[1]} and ${arr[2]} like this`;
        default:
            return `${arr[0]}, ${arr[1]} and ${arr.length - 2} others like this`;
    }
}



console.log (facebookLike2([]));
console.log (facebookLike2(["JP"]));
console.log (facebookLike2(["JP", "Isa"]));
console.log (facebookLike2(["JP", "Isa", "Pedro"]));
console.log (facebookLike2(["JP", "Isa", "Pedro", "Victor", "Pam", "Nubia", "Samuel"]));

console.log("\n==========Solução 3==============");
/**
 * @description Formata o array com nome de pessoas de maneira parecida com o Facebook, através de template pré definido e com o auxilio do regex faz buscas, utilizando shift para substituir os nomes no template
 */
const facebookLike3 = (arr) => {
    const template = [
        "No one like this yet",
        `{name} like this`,
        `{name} and {name} like this`,
        `{name}, {name} and {name} like this`,
        `{name}, {name} and {n} others like this`
    ];

    const idx = Math.min(arr.length, 4);

    return template[idx].replace(/{name}|{n}/g, (val) => {
        return val === "{name}" ? arr.shift() : arr.length;
    });
}



console.log (facebookLike3([]));
console.log (facebookLike3(["JP"]));
console.log (facebookLike3(["JP", "Isa"]));
console.log (facebookLike3(["JP", "Isa", "Pedro"]));
console.log (facebookLike3(["JP", "Isa", "Pedro", "Victor", "Pam", "Nubia", "Samuel"]));