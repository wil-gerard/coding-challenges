// complete the solution so that it revieres the string passed into it

// p: string
// r: string reversed
// e: 'bob' => 'bob' - 'larry' => 'yrral'

function reverseString(string) {
    // split string
    // reverse
    // join
    return string.split('').reverse().join('')
}


function reverseStringNoMethods(string) {
    let newStr = ''
    for (i = string.length - 1; i >= 0; i--) {
        newStr += string[i]
    }
    return newStr
}
console.log(reverseStringNoMethods('larry'), 'yrral')
console.log(reverseString('larry'), 'yrral')