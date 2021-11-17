// Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 2, print out “Fizz”; when it’s divisible by 3, print out “Buzz”; when it’s divisible by both 2 and 3, print out “Fizz Buzz”.

function fizzBuzz(num){
    // create empty string to push into
    // for loop through number with decrementation
    // if number % 3 == 0 && number % 2 == 0
      // string += "Fizz Buzz"
      // if number % 3 == 0
        //string += "Buzz"
      // if number % 2 == 0
        // string += "Fizz"
      // else
        // string += "i"
    // return string
    let newStr = ""
    for (let i = 1; num >= i; ++i){
      if (i % 2 == 0 && i % 3 == 0){
        newStr += "Fizz Buzz"
      } else if (i % 3 == 0){
        newStr += "Buzz"
      } else if (i % 2 == 0){
        newStr += "Fizz"
      } else {
        newStr += `${i}`
      }
    }
    return newStr
  }
  
  console.log(fizzBuzz(3), "1FizzBuzz")
  console.log(fizzBuzz(7), "1FizzBuzzFizz5Fizz Buzz7")
  console.log(fizzBuzz(20),)