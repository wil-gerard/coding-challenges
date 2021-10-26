// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

// If two words have the same last letter, the returned array should show them in the order they appeared in the given string.

// All inputs will be valid.

// last('man i need a taxi up to ubud'), ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up']
// last('what time are we climbing up the volcano'), ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what']
// last('take me to semynak'), ['take', 'me', 'semynak', 'to'] 

// P: String of words
// R: An array of the words sorted alphabetically by their final char

function stringToArraySortedByLastChar(str){
    // split the str by ' '
    // map through array
    //  - sort array
    //    - sort alphabetically by last index of each element
    return str
      .split(' ')
      .sort((el1, el2) => {
        if(el1[el1.length - 1] < el2[el2.length - 1]){
          return -1
        } else if (el1[el1.length - 1] > el2[el2.length - 1]){
          return 1
        } else {
          return 0
        }
      })
  }
  
  // a cleaner solution
  function last(x){
    return x.split(' ').sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
  }
  
  console.log(stringToArraySortedByLastChar('man i need a taxi up to ubud'),['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up'])
  console.log(stringToArraySortedByLastChar('what time are we climbing up the volcano'),['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what'])