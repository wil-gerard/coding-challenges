/* create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

Ex.
'eloquent' => 'loquen'
'country' => 'ountr' */

const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map((x, index, array) => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]
