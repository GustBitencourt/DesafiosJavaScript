// Escreva uma função que receba um array e uma flag order com valor padrão ASC que retorne um array ordenado de forma ascendente e DESC retorne um array ordenado de forma descendente.

const orderArray = (arr, order = "asc") => {
    if(order === "asc") {
        return arr.sort();

    } else {
        return arr.sort().reverse();
    }

}

console.log(orderArray([6, 5, 4, 3, 2, 1], "asc"));
console.log(orderArray([1, 2, 3, 4, 5, 6], "desc"));
console.log(orderArray(["Corinthians", "Bahia", "Vasco", "Manchester United", "Manchester City"]));
console.log(orderArray(["Corinthians", "Bahia", "Vasco", "Manchester United", "Manchester City"], "desc"));
console.log(orderArray(["z", "y", "x", "h", "g", "G", "f", "F", "e", "d", "c", "b", "a"]));


console.log("\n============Forma2===============");
const orderArray2 = (arr, order = "asc") => {
    return order === "asc" ? arr.sort() : arr.sort().reverse();

}

console.log(orderArray2([6, 5, 4, 3, 2, 1], "asc"));
console.log(orderArray2([1, 2, 3, 4, 5, 6], "desc"));
console.log(orderArray2(["Corinthians", "Bahia", "Vasco", "Manchester United", "Manchester City"]));
console.log(orderArray2(["Corinthians", "Bahia", "Vasco", "Manchester United", "Manchester City"], "desc"));
console.log(orderArray2(["z", "y", "x", "h", "g", "G", "f", "F", "e", "d", "c", "b", "a"]));


console.log("\n============Forma3===============");
const orderArray3 = (arr, order = "asc") => {
    for(i = 1; i < arr.length; i++) {
        for(j = 0; j < i; j++) {
            if(arr[j] > arr[i]) {
                const guardar = arr[i];
                arr[i] = arr[j];
                arr[j] = guardar;
            }
        }
    }

    if(order === "desc") {
        const inverted = [];
        for(i = arr.length - 1; i >= 0; i--) {
            inverted.push(arr[i]);
        }
        return inverted;
    }
    return arr

}

console.log(orderArray3([6, 5, 4, 3, 2, 1], "asc"));
console.log(orderArray3([1, 2, 3, 4, 5, 6], "desc"));
console.log(orderArray3(["Corinthians", "Bahia", "Vasco", "Manchester United", "Manchester City"]));
console.log(orderArray3(["Corinthians", "Bahia", "Vasco", "Manchester United", "Manchester City"], "desc"));
console.log(orderArray3(["z", "y", "x", "h", "g", "G", "f", "F", "e", "d", "c", "b", "a"]));


console.log("\n============Forma4===============");
const product1 = {
    name: "Notebook",
    price: 1500.00
}

const product2 = {
    name: "Smartphone",
    price: 700.00
}

const product3 = {
    name: "SmartWatch",
    price: 300.00
}

const product4 = {
    name: "Alexa",
    price: 100.00
}

const products = [product1, product2, product3, product4];

function orderObjectName(arr, order = "asc") {
    //recebe itemA e itemB para comparar
    arr.sort(function(itemA, itemB) {
        return itemA.name.localeCompare(itemB.name)
    })
    if(order === "desc") {
        arr.reverse();
    }
    return arr;
}

function orderObjectPrice(arr, order = "asc") {
    //recebe itemA e itemB para comparar
    arr.sort(function(itemA, itemB) {
        //item a vem na frente
        if(itemA.price < itemB.price) {
            return -1;
        }
        //item b vem na frente
        if(itemA.price > itemB.price) {
            return 1;
        }
        //faz nada se for o mesmo valor
        return 0
    })
    return order === "asc" ? arr : arr.reverse();
}

console.log(orderObjectName(products, "asc"));
console.log(orderObjectName(products, "desc"));

console.log(orderObjectPrice(products, "asc"));
console.log(orderObjectPrice(products, "desc"));


