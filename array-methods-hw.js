// Please research the following methods:
// map
// reduce
// filter
// forEach
// sort
// slice
// pop
// shift
// push
// unshift
// includes
// indexOf
// every

// Give a short description of what the method does, how it works, it's time complexity (if appropriate), and give three examples of it in action!

// ------------.map------------
// this method calls the function for each element of the array and returns an array of results

let lengths = ['Bob', 'John', 'Billiam'].map(item => item.length);

alert(lengths); // 3,4,7

// ------------.reduce------------
// this method is used to calculate a single value based on the array. it calls a function that is applied to all elements one after the other and accumulates its result to the next call.


let arr = [1, 2, 3, 4, 5];

let result = arr.reduce((sum, current) => sum + current, 0);

alert(result); // 15

// given an array of numbers, this will return the average. using .reduce to find the sum of the array 
function getAverage(marks){
    return Math.floor(marks.reduce((a, b) => a + b, 0) / marks.length)
 }

// ------------.filter------------

// ------------.forEach------------

// ------------.sort------------

// ------------.slice------------
// this extracts a section of a string based on the index supplied and returns a new string. slice takes in the first parameter as the beginning index and an optional ending index as the second parameter. if a negative index is used, it will slice backwards from the end of the string

let str = 'I want to be the very best'

console.log(str.slice(13)) // 'the very best'
console.log(str.slice(0, 6)) // 'I want'
console.log(str.slice(-9)) // 'very best

// ------------.pop------------
// extracts an item from the end of an array

// ------------.shift------------
// extracts an items from the beginning of an array

// ------------.push------------
// adds an item from the end of an array

// ------------.unshift------------
// adds an item to the beginning of an array

// ------------.includes------------

// ------------.indexOf------------
// this method finds the index of a subtring and returns the position. if no reference is found, it returns -1
const author = 'Stephen King'
const searchTerm1 = 'King'
const searchTerm2 = 'Orwell'

console.log(author.indexOf(searchTerm1)) // 8
console.log(author.indexOf(searchTerm2)) // -1
 
// ------------.every-----------