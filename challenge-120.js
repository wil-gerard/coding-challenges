/* Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter. Note: You can expect all of the inputs to be the same length. */

// P: three strings of the same length
// R: a string concatenating each inputed string by their index

function combineStringsByIndex(str1, str2, str3) {
    let newStr = ''
    for(i = 0; i < str1.length; i++){
        newStr += str1[i] + str2[i] + str3[i] 
    }
    return newStr
}

console.log(combineStringsByIndex('bob','cob', 'lob'), 'bclooobbb')