// A unsorted array of integers is given; you need to find the max product formed my multiplying three numbers. (You cannot sort the array, watch out when there are negative numbers)

//Solution 1: loop through the array with 3 nested for loops O(n^3)
//Solution 2: Sort the array and grab the top 3 numbers O(nlog(n))
//Solution 3: 
// Product is either going to be +++ or +-- so walk through keeping track of:
// - the largest positive number
// - the next 2 largest positives
// - the next 2 smallest negative numbers
// compare the products of the negaticve numbers to the product of the poitives and return the largest one with the largest positive number


function findLargestProductOf3(array) {
  if (array.length < 3) throw new Error('Array too small!')
  let largest;
  let secondLargest;
  let thirdLargest;
  let smallest;
  let secondSmallest;

  for (let currNum of array) {
    if (currNum > largest || largest === undefined) {
      thirdLargest = secondLargest;
      secondLargest = largest;
      largest = currNum;
    } else if (currNum > secondLargest || secondLargest === undefined) {
      thirdLargest = secondLargest;
      secondLargest = currNum;
    } else if (currNum > thirdLargest || thirdLargest === undefined) {
      thirdLargest = currNum;
    }

    if (currNum < smallest || smallest === undefined){
      secondSmallest = smallest;
      smallest = currNum;
    } else if (currNum < secondSmallest || secondSmallest === undefined) {
      secondSmallest = currNum;
    }
  }

  if (largest < 0) return [largest, secondLargest, thirdLargest]
  return secondLargest * thirdLargest > smallest * secondSmallest ? [largest, secondLargest, thirdLargest] : [largest, secondSmallest, smallest];
}


console.log(findLargestProductOf3([-7, -4, -1, -5, -9, -8]))