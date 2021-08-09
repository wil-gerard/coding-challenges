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

// function isUpperCase(element) {
//     return element === element.toUpperCase();
// }

// function isLowerCase(element) {
//     return element === element.toLowerCase();
// }

// function stringTransformer(str) {
//     let splitStr = str.trim().replace(/  +/g, ' ').split(' ').reverse().map(word => word.split(''))
    
//     splitStr.map((element, index, array) => {
//         console.log(element)
//         return element.map(element => {
//             console.log(element)
//             if (isUpperCase(element)) {
//                 return element.toLowerCase()
//             } else if (isLowerCase(element)) {
//                 return element.toUpperCase()
//             }
//         })    
//     })
//     console.log(splitStr)
// }

