// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

// assert.strictEqual(sumMix([9, 3, '7', '3']), 22);
// assert.strictEqual(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42); 
// assert.strictEqual(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41);

// Parameter: An array of integers as strings and numbers
// Return: The sum of all the array values as numbers
// Examples: 

// console.log(sumOfMixedValueArray([1, 2, 3, '4']), 10)
// console.log(sumOfMixedValueArray(['100', 3, '4']), 107)
// console.log(sumOfMixedValueArray([2, 3, '4', '5', '1']), 11)
// 
// Psuedocode: 
// Convert all elements to number type
// Add all numbers
// Return sum of all numbers

function sumOfMixedValueArray(array) {
    return array.map(number => Number(number)).reduce((a, b) => a + b)
  }
  
  console.log(sumOfMixedValueArray([1, 2, 3, '4']), 10)
  console.log(sumOfMixedValueArray(['100', 3, '4']), 107)
  console.log(sumOfMixedValueArray([2, 3, '4', '5', '1']), 15)