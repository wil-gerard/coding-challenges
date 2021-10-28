// An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.

// Example:

// The starting array sequence is [1,2,3,4,5,6,7,8,9]
// The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
// Your function should return the int 5.
// If no number was deleted from the array and no difference with it, your function should return the int 0.

// Note: N may be 1 or less (in the latter case, the first array will be []).

// findDeletedNumber([1,2,3,4,5], [3,4,1,5]), 2, 'Deletion')
// findDeletedNumber([1,2,3,4,5,6,7,8,9], [1,9,7,4,6,2,3,8]), 5, 'Deletion')
// findDeletedNumber([1,2,3,4,5,6,7,8,9], [5,7,6,9,4,8,1,2,3]), 0, 'No deletion')

// Paramater(s): Two arrays. If they are not empty - they contain numbers n1 <= 1 to n2 <= 1
// Return(s): If the 2nd array is missing a number - return that number

function findDeletedNumber(arr1, arr2){
    // if the length of arr1 and arr2 are the same <- return 0
      // else
        // sort arr2 in ascending order
        // iterate through both arrays
          // if each index returns the same number - continue
          // else return the number from arr1
    let returnNum = 0
    if (arr1.length == arr2.length){
      return returnNum
    } else {
      let sortedArr2 = arr2.sort((a,b) => a - b)
      for(let i = 0; returnNum == 0; i++){
        console.log(`arr1 = ${arr1[i]} arr2 = ${sortedArr2[i]}`)
        arr1[i] === sortedArr2[i] ? null : returnNum += arr1[i]
      }
      return returnNum
    }
  }
  
  // CLEANER SOLUTION:
  // function findDeletedNumber(arr, mixArr) {
  //   return arr.filter(v=>mixArr.indexOf(v)==-1)[0]||0
  // }
  
  
  console.log(findDeletedNumber([1,2,3,4,5], [3,4,1,5]), 2);
  console.log(findDeletedNumber([1,2,3,4,5,6,7,8,9], [1,9,7,4,6,2,3,8]), 5);