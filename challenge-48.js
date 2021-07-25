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

function filter_list(l) {
    let filteredList = []
    l.forEach(listItem => {
        if (typeof listItem === "number") {
            filteredList.push(listItem)
        }
    })
    return filteredList
}