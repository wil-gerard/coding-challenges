/* In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

For example:

dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].
dup(["kelless","keenness"]) = ["keles","kenes"].
Strings will be lowercase only, no spaces. See test cases for more examples.

Good luck! */

// map through the arrays, each return in the map should be the string split and filtering for each letter that does not equal the one before it then join them up - we had this pattern before!

function dup(s) {
    let splitArr = s.map(word => word.split(''))
    return splitArr.filter((value, index, array) => {
        for (let i = array.length + 1; i > 0;) {
            array[i] == array[i + 1] ? i-- : array[i] 
        }
    })
};