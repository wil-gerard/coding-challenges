/* The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]
Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray. */

// TEST CODE

var maxSequence = function(arr) {

    if (arr.length == 0 ) {
        return 0
    } else {
        const subarraySum = arr.reduce((a, b) => a + b)
        if (subarraySum < 0) {
            return 0
        } else {
            return subarraySum
        }
    }
}

function maxSequence(arr) {
    let product = 1;
    if (arr.length == 0 ) {
        return 0;
    } else {
        for (let i = 0; i < arr.length; i++) {
            console.log(arr[i]);
        }
    }
    return product;
}

function maxSequence(arr) {
    let sum = [];
    if (arr.length == 0 ) {
        return 0;
    } else {
        for (let i = 0; i < arr.length; i++) {
            console.log(arr[i]);
        }
    }
    return product;
}

