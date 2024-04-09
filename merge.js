// Build a function mergeSort that takes in an array 
// and returns a sorted array, using a recursive merge sort methodology

function mergeSort(array, sortedArray) {
  if (array.length < 1) {
    return sortedArray;
  }

  let lowestNumber = Math.min(...array);
  let lowestNumberIndex = array.indexOf(lowestNumber);
  let sortedNumber = array.splice(lowestNumberIndex, 1);

  sortedArray.push(sortedNumber);
  return mergeSort(array, sortedArray);
}

// An input of [3, 2, 1, 13, 8, 5, 0, 1] should return [0, 1, 1, 2, 3, 5, 8, 13] 
// And an input of [105, 79, 100, 110] should return [79, 100, 105, 110].

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1], []));
console.log(mergeSort([105, 79, 100, 110], []));