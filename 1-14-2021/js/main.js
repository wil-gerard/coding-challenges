// Please create a function that takes in the name of a person.This function should add this person to a names list and let them know their position on the list.The names list should be created outside of the function. 

document.querySelector('#addNameButton').addEventListener('click', addAndTrackName);




function addAndTrackName() {
    let nameList = ['zoidberg', 'fry', 'bender', 'farnsworth'];
    // let newName = document.querySelector('#nameInput').value;
    let newNameList = nameList.unshift('bobby');
    // let newNameListPosition = newNameList.indexOf(newName);
    console.log(newNameList.length);
}

