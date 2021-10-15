// Given an array of digital numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

// For example:

// ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
// ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
// ([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]

// P: a non empty array of whole numbers and a single number
// R: a new array containing the even numbers based off the given length parameter number

function evenNumbersFromArrayEnd(arr, length) {
    // filter out odd numbers
    // slice from 0 index to the given length parameter number
    // return that sliced array
    return arr.filter(num => num % 0).slice(`-${length}`)
  }
  
  console.log(evenNumbersFromArrayEnd([1,2,3,4,5,6], 2) [4,6])
  console.log(evenNumbersFromArrayEnd([-2,2,0,4,2,6], 3) [6,2,4])
  console.log(evenNumbersFromArrayEnd([-100,-5,1,1,1,1,2,-50,1,1,4], 4) [-100,2,-50,4])