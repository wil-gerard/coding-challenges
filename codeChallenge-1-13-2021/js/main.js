// Please create a function that takes in an array.The function should console.log() the sum of the first value in the array and the last value in the array

function printFirstAndLastArrayValue() {
    let anArray = [21, 1, , 2, 3, 22];
    let sum = anArray[0] + anArray[anArray.length - 1];
    console.log(sum);
}