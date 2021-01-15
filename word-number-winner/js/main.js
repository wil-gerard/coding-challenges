// Please create a function that takes in a number and a word.If the length of the word multiplied by the number passed into the function is greater than 100, alert "WINNER"!


document.querySelector('button').addEventListener('click', inputWordAndNumberOutputWinner);

function inputWordAndNumberOutputWinner() {
    let theWord = document.querySelector('#theWord').value;
    let theNumber = document.querySelector('#theNumber').value;
    let wordLength = theWord.length;
    let lengthTimesNumberResult = wordLength * theNumber;
    console.log(wordLength);
    if (lengthTimesNumberResult > 100) {
        alert('WINNER!');
    }
}