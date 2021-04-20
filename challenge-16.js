// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

// If the input array is empty or null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

[1,2,3,4,-5,-4]

function countPositivesSumNegatives(input) {
    if ((input === 0) || (input === null)) {
        let newArr = []
        return newArr
    } else {
        let newArr = []
        newArr.push(input.filter(num => num > 0).length)
        let sumOfNegatives = input.filter(num => num < 0).reduce((num1, num2) => {return num1 + num2}, 0)
        newArr.push(sumOfNegatives)
        return newArr
    }
}