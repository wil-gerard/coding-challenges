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
// .match() looks for matching strings within the given string. a regex is given for the parameter, all instances will be returned as an array object.

var str = "The rain in SPAIN stays mainly in the plain"; 
var res = str.match(/ain/g);
// returns ain,ain,ain

// ------------------------ repeat ------------------------ 
// .repeat() constructs and returns a new string, concatenating the specified number of copies based on the given parameter
const poke = 'Pokemon';

console.log(`Gotta catchem all ${poke.repeat(3)}`);
// Gotta catchem all Pokemon Pokemon Pokemon

// ------------------------ replace ------------------------
// .replace() takes in two parameters and searches the given string for all instances of the first given parameter, then replaces with the second given parameter, returning a new string. if a string is given for the first parameter, only the first instance is replaced, if a regex is given, all instances are replaced. the second parameter can be a string or a function to be called for each match.
const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

console.log(p.replace('dog', 'monkey'));
// expected output: "The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"


const regex = /Dog/i;
console.log(p.replace(regex, 'ferret'));
// expected output: "The quick brown fox jumps over the lazy ferret. If the dog reacted, was it really lazy?"


// ------------------------ search ------------------------ 
// .search() searchs for a match between a regex and the given string, returning the index of the first match or -1 if no match is found

let str = "hey JudE"
let re = /[A-Z]/g
let reDot = /[.]/g
console.log(str.search(re))    // returns 4, which is the index of the first capital letter "J"
console.log(str.search(reDot)) // returns -1 cannot find '.' dot punctuation

// ------------------------ slice ------------------------
// .slice() extracts a portion of a string and returns it as a new string. it does not modify the original string. two parameters are given, the sliced string portion starts from the first given index parameter and up to, but not including, the second given index parameter. if the second given index is ommitted, the portion is sliced to the end of the string. if a negative index is given, it is treated as str.length + endIndex

let str1 = 'The morning is upon us.', // the length of str1 is 23.
    str2 = str1.slice(1, 8),
    str3 = str1.slice(4, -2),
    str4 = str1.slice(12),
    str5 = str1.slice(30);
console.log(str2)  // OUTPUT: he morn
console.log(str3)  // OUTPUT: morning is upon u
console.log(str4)  // OUTPUT: is upon us.
console.log(str5)  // OUTPUT: ""

let str = 'The morning is upon us.'
str.slice(-3)      // returns 'us.'
str.slice(-3, -1)  // returns 'us'
str.slice(0, -1)   // returns 'The morning is upon us'

// ------------------------ split ------------------------ 


// ------------------------ substr ------------------------ 


// ------------------------ toLowerCase ------------------------ 


// ------------------------ toUpperCase ------------------------ 


// ------------------------ trim ------------------------ 

