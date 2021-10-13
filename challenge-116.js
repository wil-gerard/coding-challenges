// p: an array of integers as strings and number types
// r: the sum of all integers as number types
// e: [1,'2',3,'5'] => 11

function sumMixedTypeIntegerArray(array){
    // convert array elements to number type
    // sum all array elements
    // return sum
    return array.reduce((sum, currentNumber) => sum + Number(currentNumber), 0)
}

console.log(sumMixedTypeIntegerArray([1,'2',3,'5']), 11)