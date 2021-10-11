// create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

// Ex.
// 'eloquent' => 'loquen'
// 'country' => 'ountr'

// Parameter: A string with more than two characters
// Returns: The string with the first and last characters removed

// function firstAndLastRemoved(x) {
//   let newStr = ''
//   for(let i = 1; i <= x.length - 2; i++) {
//     newStr += x[i]
//   }

//   return newStr
// }

function firstAndLastRemoved(x) {
  return x.slice(1, -1)
}


console.log(firstAndLastRemoved('booop'), 'ooo')
console.log(firstAndLastRemoved('down'), 'ow')
console.log(firstAndLastRemoved('hhiiiiiii'), 'hiiiiii')