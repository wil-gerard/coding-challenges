// You will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.
 // For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

 // P: an array of integer numbers
 // R: the sum of all the integers that occur only once in the array

 function sumOfNoRepeatNumbers(arr) {
    // filter all numbers that do not repeat in the array
    // sum those numbers
    // return sum
    return arr.filter(num => arr.indexOf(num) === arr.lastIndexOf(num)).reduce((a, c) => a + c, 0)
 }

 console.log(sumOfNoRepeatNumbers([4,5,7,5,4,8]), 15)