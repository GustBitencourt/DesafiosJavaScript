//escreva uma função que recebe um OBJETO como parametro e retorne as chaves e valores invertidos

function objInvert(obj) {

    // Pega as chaves do objeto transforma em um array com keys e usa reduce para inverter os valores
    return Object.keys(obj).reduce((newObj, key) => {
        newObj[obj[key]] = key;

        return newObj;
    }, {})
}

console.log(objInvert({ a: 1, b: 2, c: 3 }));
console.log(objInvert({ a: "Apple", b: "Microsoft", c: "Google" }));
console.log(objInvert({ 1: "a", 2: "b", 3: "c" }));