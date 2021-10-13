// p: string larger than 2 characters
// r: inputed string with first and last char removed
// e: 'bob' => 'o'

function removeFirstAndLastChar(string){
    return string.slice(1, -1)
}

console.log(removeFirstAndLastChar('bob'), 'o')