// p: three strings of the same length
// r: one string created from combining the characters of same index from each inputed string
// e: 'aa' 'bb' 'cc' => 'abcabc'

function combineStringIndices(string1, string2, string3){
    // create new str to concate into
    // for loop that allows us to add each string char by index in incremantal order
    // return the new string
    let newStr = ''
    for (let i = 0; i < string1.length; i++) {
        newStr += string1[i] + string2[i] + string3[i]
    }
    return newStr
}

console.log(combineStringIndices('aaa','bbb','ccc'), 'abcabcabc')