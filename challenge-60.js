/* Given a string, return a new string that has transformed based on the input:

Change case of every character, ie. lower case to upper case, upper case to lower case.
Reverse the order of words from the input.
Note: You will have to handle multiple spaces, and leading/trailing spaces.

For example:

"Example Input" ==> "iNPUT eXAMPLE"
You may assume the input only contain English alphabet and spaces. */
let regexLowerUpper = /(?(?=[A-Z])|[a-z]|[A-Z])/g

function stringTransformer(str) {
    return str.trim().replace(/  +/g, ' ').split(' ').reverse().map(word => word.replace(regexLowerUpper)).join(' ')
}

function isUpperCase(str) {
    return str === str.toUpperCase();
}

function isLowerCase(str) {
    return str === str.toLowerCase();
}

function stringTransformer(str) {
    let splitStr = str.trim().replace(/  +/g, ' ').split(' ').reverse().map(word => word.split(''))
    
    splitStr.forEach(element, index, array => {
        if (isUpperCase(letter)) {
            return letter.toLowerCase()
        } else if (isLowerCase(letter)) {
            return letter.toUpperCase()
        }
    })
}

