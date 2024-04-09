// Build a function mergeSort that takes in an array 
// and returns a sorted array, using a recursive merge sort methodology

function merge(left, right) {
  let arr = []

  while (left.length && right.length) {
      if (left[0] < right[0]) {
          arr.push(left.shift())  
      } else {
          arr.push(right.shift()) 
      }
  }
  
  return [ ...arr, ...left, ...right ]
}

function mergeSort(array) {
  const half = array.length / 2
  
  if(array.length < 2){
    return array 
  }
  
  const left = array.splice(0, half)
  return merge(mergeSort(left),mergeSort(array))
}

// An input of [3, 2, 1, 13, 8, 5, 0, 1] should return [0, 1, 1, 2, 3, 5, 8, 13] 
// And an input of [105, 79, 100, 110] should return [79, 100, 105, 110].

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1], []));
console.log(mergeSort([105, 79, 100, 110], []));

// My initial approach to the problem
// I forgot I had to use merge sort methodology
// But I liked my solution so it's also here:

/*

function mergeSort(array, sortedArray) {
  if (array.length < 1) {
    return sortedArray;
  }

  let lowestNumber = Math.min(...array);
  let lowestNumberIndex = array.indexOf(lowestNumber);
  let sortedNumber = array.splice(lowestNumberIndex, 1);

  sortedArray.push(sortedNumber);
  return mergeSort(array, sortedArray);

  */
