/* It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.Return the average of the given array rounded down to its nearest integer. The array will never be empty. */

// P: a non empty array of whole number integers
// R: return the average of the array rounded down to its nearest integer

function averageOfNumArray(arr) {
    // sum all numbers in the array
    // divide sum by length of array
    // round the average down to nearest integer
    // return the number
    return Math.floor(arr.reduce((a, c) => a + c, 0) / arr.length)
}

console.log(averageOfNumArray([2,2,2,2]), 2)
console.log(averageOfNumArray([2,1,2,2]), 2)
console.log(averageOfNumArray([2,1,1,1]), 1)