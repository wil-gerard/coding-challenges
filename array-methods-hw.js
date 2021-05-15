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

// .map
// 

// .reduce

// .filter

// .forEach

// .sort

// .slice
// this extracts a section of a string based on the index supplied and returns a new string. slice takes in the first parameter as the beginning index and an optional ending index as the second parameter. if a negative index is used, it will slice backwards from the end of the string

let str = 'I want to be the very best'

console.log(str.slice(13)) // 'the very best'
console.log(str.slice(0, 6)) // 'I want'
console.log(str.slice(-9)) // 'very best

// .pop
// extracts an item from the end of an array

// .shift
// extracts an items from the beginning of an array

// .push
// adds an item from the end of an array

// .unshift
// adds an item to the beginning of an array

// .includes

// .indexOf
// this method finds the index of a subtring and returns the position. if no reference is found, it returns -1
const author = 'Stephen King'
const searchTerm1 = 'King'
const searchTerm2 = 'Orwell'

console.log(author.indexOf(searchTerm1)) // 8
console.log(author.indexOf(searchTerm2)) // -1
 
// .every