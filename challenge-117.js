// You will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

// repeats([4,5,7,5,4,8]),15)
// repeats([9, 10, 19, 13, 19, 13]),19)
// repeats([16, 0, 11, 4, 8, 16, 0, 11]),12)
// repeats([5, 17, 18, 11, 13, 18, 11, 13]),22)
// repeats([5, 10, 19, 13, 10, 13]),24)


// QUESTIONS TO ASK INTERVIEWER: Will it only ever by numbers? Always whole numbers? Negative?
// p: an array of numbers - in which two numbers occur once - and the rest repeat twice
// r: the sum of the two numbers that occur once

function sumOfSingleOccurance(arr){
    // find the two numbers that occur once
    // sum numbers
    // return that number
    return arr.filter(num => arr.indexOf(num) === arr.lastIndexOf(num)).reduce((a, c) => a+c,0)
  }
  
  console.log(sumOfSingleOccurance([4,5,7,5,4,8]),15)
  console.log(sumOfSingleOccurance([9, 10, 19, 13, 19, 13]),19)
  console.log(sumOfSingleOccurance([16, 0, 11, 4, 8, 16, 0, 11]),12)