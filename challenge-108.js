// Create a function that takes in a word and returns the word with the first letter capitalized.

// Don't worry about numbers, special characters, or non-string types being passed to the function. The string lengths will be from 1 character up to 10 characters, but will never be empty.

function capitalizeFirstCharacter(string) {
    // cap first letter
    // add the rest of the letters
    return string[0].toUpperCase() + string.slice(1)
  }
  
  console.log(capitalizeFirstCharacter('dog'), 'Dog')
  console.log(capitalizeFirstCharacter('bog'), 'Bog')
  console.log(capitalizeFirstCharacter('mOoOp'), 'MOoOp')