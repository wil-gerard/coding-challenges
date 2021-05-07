// Array Challenge #4
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

let str = 'are i no'

// My Solution -->
function getCount(str) {
    let vowelsCount = str.match(/[aeiou]/g)
    if (vowelsCount === null) {
        return vowelsCount = 0
    } else {
        return vowelsCount.length
    }
}


// Best Solution -->
function getCount(str) {
    return (str.match(/[aeiou]/ig)||[]).length;
  }