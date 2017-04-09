function createPhoneNumber(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if(i===0) {
      result.push('(', arr[i])
    } else if(i===3) {
      result.push(') ',arr[i])
    } else if(i===6) {
      result.push('-', arr[i])
    } else
    result.push(arr[i])
  }
  return result.join("")
}

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])

// Test.assertEquals(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
