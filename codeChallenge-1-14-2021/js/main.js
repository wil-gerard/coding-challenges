// Please create a function that takes in the name of a person.This function should add this person to a names list and let them know their position on the list.The names list should be created outside of the function. 

document.querySelector('#addNameButton').addEventListener('click, addAndTrackName')
let nameList = document.querySelector('#nameList')
let nameArray = ['zoidberg', 'fry', 'bender', 'farnsworth']

function addAndTrackName() {
    let newName = document.querySelector('#nameInput').value
    nameList.innerText = nameArray;
    console.log(newName);
}