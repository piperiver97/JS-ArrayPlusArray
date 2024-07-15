function arrayPlusArray(array1, array2) {
    let sum1 = 0;
    let sum2 = 0;

    for (let i = 0; i < array1.length; i++) {
        sum1 += array1[i];
    }

    for (let i = 0; i < array2.length; i++) {
        sum2 += array2[i];
    }

    return sum1 + sum2;
}

module.exports = arrayPlusArray;
