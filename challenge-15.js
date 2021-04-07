// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// Patrick Feeney => P.F

function abbrevName(name){
    let nameArray = name.split(' ');
    let newName = []
    newName.push(nameArray[0][0])
    newName.push(nameArray[1][0])
    return newName.join('.').toUpperCase()
}