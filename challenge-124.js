// Given a string, return a new string that has transformed based on the input: Change case of every character, ie. lower case to upper case, upper case to lower case. Reverse the order of words from the input. Note: You will have to handle multiple spaces, and leading/trailing spaces. For example: "Example Input" ==> "iNPUT eXAMPLE" You may assume the input only contain English alphabet and spaces.


function encodeString(str) {
    // split
    // reverse
    // join
    // split
    // map letters to diff casing
    // join
    let strReversed = str
      .split(' ')
      .reverse()
      .join(' ')
    let strCasing = strReversed
      .split('')
      .map(el => el == el.toLowerCase() ? el.toUpperCase() : el.toLowerCase())
      .join('')
  
    return strCasing
  }
  
  console.log(encodeString("Example Input"), "iNPUT eXAMPLE")