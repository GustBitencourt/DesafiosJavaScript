/**
 Escreva uma função que receba dois parametros (fullname, flag)
 - Se flag for igual a firstname deve retornar apenas a primeira palavra de fullname
 - Se flag for igual a lastname deve retornar todo o texto, exceto a primeira palavra do parametro fullname
 - Se a flag for vazia ou fullname conter uma palavra apenas retornar fullname
 */

function returnName(fullname, flag = "") {
    //transformando o nome em "array"
    let name = fullname.split(" ");
    
    if (flag.length == 0 || name.length <= 1) {
        return fullname;

    } else if (flag === "firstname") {
        return name[0];

    } else {
        //elimina o primeiro nome com slice e depois "junta os outros nomes"
        return name.slice(1).join(" ");
    }
}

console.log(returnName("João da Silva", "firstname"));
console.log(returnName("João da Silva", "lastname"));
console.log(returnName("João da Silva"));
console.log(returnName("João", "lastname"));

console.log("\n================Forma2================\n");

function returnName2(fullname, flag = "") {
    //transformando o nome em "array"
    let name = fullname.split(" ");
    
    return flag.length == 0 || name.length <= 1 ? fullname : flag === "firstname" ? name[0] : name.slice(1).join(" ");
}

console.log(returnName2("João da Silva", "firstname"));
console.log(returnName2("João da Silva", "lastname"));
console.log(returnName2("João da Silva"));
console.log(returnName2("João", "lastname"));