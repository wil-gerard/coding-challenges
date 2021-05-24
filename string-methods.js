// Please research the following string methods:
// charAt
// charCodeAt
// concat
// includes
// indexOf
// match
// repeat
// replace
// search
// slice
// split
// substr
// toLowerCase
// toUpperCase
// trim

// Give a short description of what the method does, how it works, it's time complexity (if appropriate), and give three examples of it in action!

// ------------------------ charAt ------------------------
// .charAt() method is used to find the character at a given index
let str = "HELLO WORLD";
str.charAt(0); // returns H

// ------------------------ charCodeAt ------------------------
// .charCodeAt() returns the unicode (UTF-16) at a specified index
let str = "HELLO WORLD";
str.charCodeAt(0);         // returns 72

// ------------------------ concat ------------------------ 
// .concat() joins two or more strings
let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat(" ", text2);

// ------------------------ includes ------------------------
// .includes() asks if the given string paramenter is within the array. returning true or false
const array1 = [1, 2, 3];

console.log(array1.includes(2));
// expected output: true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// expected output: true

console.log(pets.includes('at'));
// expected output: false

// ------------------------ indexOf ------------------------
// .indexOf() returns the index of the first instance of a string. if none are found, -1 is returned. a second parameter is accepted as the index to start searching from
let str = "Please locate where 'locate' occurs!";
let pos = str.indexOf("locate");
// returns 7

let str = "Please locate where 'locate' occurs!";
let pos = str.lastIndexOf("John");
// returns -1

var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate", 15);
// returns 21

// ------------------------ match ------------------------

// ------------------------ repeat ------------------------ 
// .repeat() constructs and returns a new string, concatenating the specified number of copies based on the given parameter
const poke = 'Pokemon';

console.log(`Gotta catchem all ${poke.repeat(3)}`);
// Gotta catchem all Pokemon Pokemon Pokemon

// ------------------------ replace ------------------------ 
// ------------------------ search ------------------------ 
// ------------------------ slice ------------------------ 
// ------------------------ split ------------------------ 
// ------------------------ substr ------------------------ 
// ------------------------ toLowerCase ------------------------ 
// ------------------------ toUpperCase ------------------------ 
// ------------------------ trim ------------------------ 