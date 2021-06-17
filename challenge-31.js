// This time no story, no theory. The examples below show you how to write function accum:

// Examples:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

// create an array with each value being a single character string
// create a new array with each value being repeated by a number determined by it's index
// capitalize each value
// join the new array into a string with each value being seperated by "-"

function accum(s) {
	let newArray = s.split('')
    console.log(newArray)
    let repeatedArray = newArray.map((el, index) => {
        console.log(index + 1)
        return el.repeat(index + 1)
    })
    console.log(repeatedArray)
    let capitalizedArray = repeatedArray.map((el) => {
        return el[0].toUpperCase() + el.slice(1).toLowerCase();
    })
    console.log(capitalizedArray)
    return capitalizedArray.join('-')
}