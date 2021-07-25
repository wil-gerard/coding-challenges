/* In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

Example
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123] */

// WRONG
// function filter_list(l) {
//     let newArr = l.filter(listItem => {
//         console.log(`${listItem} type is ${typeof listItem}`)
//         if (typeof listItem !== 'string' && listItem !== 0) {
//             console.log(`ROUND 2 -- ${listItem} type is ${typeof listItem}`)
//             return listItem
//         } else if (listItem === 0) {
//             console.log(`ROUND 3 -- ${listItem} type is ${typeof listItem}`)
//             return 0
//         }
//     })
//     newArr = toNumber(newArr)
// }

//// LEARNING EXAMPLE
// function filter_array_values(arr) {
//     arr = arr.filter(isEligible);
//     return arr;
//   }
  
//   function isEligible(value) {
//     if(value !== false || value !== null || value !== 0 || value !== "") {
//       return value;
//     }
//   }
  
//   console.log(filter_array_values([58, '', 'abcd', true, null, false, 0]));


// ===========> MY ANSWER <===========
function filter_list(l) {
    let filteredList = []
    l.forEach(listItem => {
        if (typeof listItem === "number") {
            filteredList.push(listItem)
        }
    })
    return filteredList
}

// PARAMETER (INPUT) [1,'a','b',0,15,'0','2']
// RETURNS [1, 0, 15]


// ===========> THIS DOES NOT WORK <===========
///* This does NOT work because the callback function of filter is first running a typeof check on v and then returns the value. then the filter method checks to see if that value is true, if the value is 0, it is considered falsey and it does not return. */
function filter_list(l) {
    return l.filter((v) => {
        if (typeof v == "number") {
            return v
        }
    })
  }

// PARAMETER (INPUT) [1,'a','b',0,15,'0','2']
// RETURNS [1, 15]

// ===========> BEST ANSWER <===========
/* This DOES work because a typeof check for 0 returns true for 'number'. it doesn't care then that the value is number 0. it checks for true first and then returns the value*/
function filter_list(l) {
    return l.filter((v) => {return typeof v == 'number'})
}

// PARAMETER (INPUT) [1,'a','b',0,15,'0','2']
// RETURNS [1, 0, 15]

