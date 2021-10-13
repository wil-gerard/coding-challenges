// p: a string of 1 - 10 chars
// r: the inputed string with first char capitalized
// e: 'bob' => 'Bob'

function capitalizeString(string) {
    // capitalize first char
    // add rest of string
    // return
    return string[0].toUpperCase() + string.slice(1)
}

console.log(capitalizeString('bob'), 'Bob')