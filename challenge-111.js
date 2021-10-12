function sumOfMixed(array) {
    return array.reduce((a, b) => a + Number(b))
  }
  
  // console.log(sumOfMixedValueArray([1, 2, 3, '4']), 10)
  // console.log(sumOfMixedValueArray(['100', 3, '4']), 107)
  // console.log(sumOfMixedValueArray([2, 3, '4', '5', '1']), 15)
  
  console.log(sumOfMixed([1, 2, 3, '4']), 10)
  console.log(sumOfMixed([4, 3, '4', 4, '500']), 515)
  console.log(sumOfMixed([2, 3, '4', '5', '1']), 15)