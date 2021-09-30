/* The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))(("  */

// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c

function duplicateEncode(word){
    return word.toLowerCase().split('').map((letter, index) => word.indexOf(letter) === 1 ? letter = '(' : letter = ')' ).join('')

}

function duplicateEncode(word){
    return word.toLowerCase().split('').map((letter, index) => console.log(`${index}` + word.indexOf(letter, index)))
}
  
function duplicateEncode(word){
    console.log( word.toLowerCase().split(''))
}

function duplicateEncode(string){
    return string
                .toLowerCase()
                .split('')
                .map((letter, index, array) => array.indexOf(letter) === array.lastIndexOf(letter) ?
                    letter = '(' :
                    letter = ')')
                .join('')   
}