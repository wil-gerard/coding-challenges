// 7 kyu
//--------------- Disemvowel Trolls -------------------

// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

// PSUEDO
// input string with vowels
// transform string so each letter is an element in an array with split using ' ' as the delimiter 
// find and remove the arrays string elements with vowel values
// return string without vowels
// output string without vowels

// function disemvowel(str) {
//     let vowelArray = ['a', 'e', 'i', 'o', 'u']
//     let letterArray = str.split('');
//     let filteredArray = letterArray.filter(letter => !vowelArray.find(vowel => letter.toLowerCase() == vowel))
//     let filteredString = filteredArray.join('')
//     return filteredString;
// }

// Test.assertEquals(disemvowel("This website is for losers LOL!"),
//     "Ths wbst s fr lsrs LL!")


// 8 kyu
//---------------  Find the smallest integer in the array --------------- 

// Given an array of integers your solution should find the smallest integer.

// For example:

// Given[34, 15, 88, 2] your solution will return 2
// Given[34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

class SmallestIntegerFinder {
    findSmallestInt(arr) {
        arr.sort((a, b) => a > b ? 1 : -1)
        return arr[0]
    }
}

// 8 kyu
// --------------- Square(n) Sum --------------- 

// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1 ^ 2 + 2 ^ 2 + 2 ^ 2 = 9.

function squareSum(numbers) {
    return numbers.reduce((sum, current) => sum + current ** 2, 0)
}

// 8 kyu
// ---------------  A Needle in the Haystack--------------- 

// Can you find the needle in the haystack ?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message(as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
// should return "found the needle at position 5"

function findNeedle(haystack) {
    let whereTheNeedleIs = haystack.findIndex((needle, index) => needle === 'needle');
    return `found the needle at position ${whereTheNeedleIs}`
}

// 7 kyu
// --------------- Odd or Even ? ---------------

// Task:
// Given a list of numbers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0](array with a zero).

function oddOrEven(array) {
    let sum = array.reduce((a, b) => {
       return a + b
    }, 0)
    console.log(sum)
    if (sum % 2 == 0 || sum === 0) {
        return 'even'
    } else {
        return 'odd'
    }
}


// 8 kyu
// --------------- Find Maximum and Minimum Values of a List ---------------

// let thisArray = [0]

// oddOrEven(thisArray)

// Your task is to make two functions, max and min(maximum and minimum in PHP and Python) that take a(n) array / vector of integers list as input and outputs, respectively, the largest and lowest number in that array / vector.

//     #Examples

// max([4, 6, 2, 1, 9, 63, -134, 566]) returns 566
// min([-52, 56, 30, 29, -54, 0, -110]) returns - 110
// max([5]) returns 5
// min([42, 54, 65, 87, 0]) returns 0
// #Notes

// You may consider that there will not be any empty arrays / vectors.

let numArray = [66,1112,32,88,1222]

function max(array) {
    let maxNum = array.sort((a, b) => b - a)
    return maxNum[0]
}

function min(array) {
    let minNum = array.sort((a, b) => a - b)
    return minNum[0]
}

// 8 kyu
// --------------- Even or Odd ---------------

// Create a function (or write a script in Shell) that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function even_or_odd(number) {
    if (number % 2 == 0){
        return "Even"
    } else {
        return "Odd"
    }
}

// 8 kyu
// --------------- Sum of positive ---------------

// You get an array of numbers, return the sum of all of the positives ones.

//     Example[1, -4, 7, 12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
    let filtered = arr.filter(number => number > 0)
    return filtered.reduce((sum, current) => sum + current, 0)
}

// 8 kyu
// --------------- Opposite number ---------------

// Very simple, given a number, find its opposite.

//     Examples:

// 1: -1
// 14: -14
// -34: 34

function opposite(number) {
    if (number > 0) {
        return Number(`-${number}`)
    } else {
        return Math.abs(number)
    }
}