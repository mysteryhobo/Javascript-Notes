function mergeSort (array, start = 0, end = array.length - 1) {
  console.log('calling: ', start, end)
  if (end === start) return [array[start]];
  const midpoint = Math.floor((end + start) / 2);
  const left = mergeSort(array, start, midpoint);
  const right = mergeSort(array, midpoint + 1, end)
  return merge(left, right)
}

function merge (left, right) {
  const mergedArray = [];

  while (left.length > 0 && right.length > 0) {
    if (left[0] <= right[0]) {
      mergedArray.push(left.shift());
    } else {
      mergedArray.push(right.shift());
    }
  }
  return [...mergedArray, ...left, ...right]
}

console.log(mergeSort([7, 2, 4, 9, 3, 8, 5, 1])) 