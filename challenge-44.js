/* Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types. */

function findShort(s){
    let wordArr = s.split(' ')
    let wordLengthArr = []
    wordArr.forEach((word) => {
        wordLengthArr.push(word.length)
    })
    return wordLengthArr.sort((a, b) => a - b)[0]
}   