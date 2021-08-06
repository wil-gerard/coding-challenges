/* You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

Find max(abs(length(x) − length(y)))

If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

Example:
a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
mxdiflg(a1, a2) --> 13
Bash note:
input : 2 strings with substrings separated by ,
output: number as a string */

function mxdiflg(a1, a2) {
    let a1Lengths = []
    let a2Lengths = []
    if (a1.length == 0 || a2.length == 0) {
        return -1
    } else {
        let bothArr = a1.concat(a2)
        a1.forEach(value => a1Lengths.push(value.length))
        a2.forEach(value => a2Lengths.push(value.length))
        console.log(a1)
        console.log(a2)
        console.log(a1Lengths)
        console.log(a2Lengths)
        let max1 = Math.max(...a1Lengths)
        let max2 = Math.max(...a2Lengths)
        let min1 = Math.min(...a1Lengths)
        let min2 = Math.min(...a2Lengths)
        let max = Math.max(max1, max2)
        let min = Math.min(min1, min2)

        return max - min
    }
}

function mxdiflg(a1, a2) {
    let lengths = []
    if (a1.length == 0 || a2.length == 0) {
        return -1
    } else {
        let bothArr = a1.concat(a2)
        bothArr.forEach(value => lengths.push(value.length))
        let max = Math.max(...lengths)
        let min = Math.min(...lengths)

        return max - min
    }
}