// remova as ocorrencias impares do array

function removeOddOccurrences(arr) {
    const obj = arr.reduce((prevValues, currentValue) => {
        const obj = {...prevValues};
        let count = (obj[currentValue] || 0) + 1;
        obj[currentValue] = count;
        return obj;
    }, {});
    return Object.keys(obj).filter((key) => {
        return obj[key] % 2 !== 0;
    })[0];
}

console.log(removeOddOccurrences([0, 3, 3]));
console.log(removeOddOccurrences([0, 0, 5, 5, 5]));



function removeOddOccurrences2(arr) {
    return arr.reduce((x, y) => x ^ y);
}

console.log(removeOddOccurrences2([0, 3, 3]));