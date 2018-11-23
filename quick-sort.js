// quickSort needs to take in an array
// then the last element will be chosen as the pivot
// every element in array will be compared to pivot and then placed
// in a left array or right array (left smaller, right larger)
// then each of those arrays are put through the quicksort function until they
// only have one element in them.  Then we put all the arrays back together
// left array + pivot + right array


function quickSort(array) {
  if (array.length < 2) { return array };

  let pivot = array.slice(-1)
  let leftArray = [];
  let rightArray = [];

  for(i = 0; i < array.length - 1; i++) {
    if (array[i] < pivot[0]) {
      leftArray.push(array[i]);
    } else {
      rightArray.push(array[i]);
    }
  }

  let finalArray = quickSort(leftArray).concat(pivot, quickSort(rightArray));
  return finalArray
};

module.exports = quickSort
