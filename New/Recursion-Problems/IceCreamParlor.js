/*
  From a list of items and their price, find the indicies of two items that allow us to spend all of our money
  Source: https://www.youtube.com/watch?v=Ifwf3DBN1sc&list=PLI1t_8YX-ApvMthLj56t1Rf-Buio5Y8KL&index=2
*/


// BruteForce Answer O(n^2)
// returns values instead of indexes for easier reading
const bruteForcefindChoices = (options, money) => {
  const runningList = []
  for (let i = 0; i < options.length; i ++) {
    if (options[i] > money) continue;
    const item1Index = i;
    for (let j = i + 1; j < options.length; j ++) {
      if (options[item1Index] + options[j] === money) runningList.push([item1Index, j])
    }
  }
  return runningList;
}

const menu = [2, 7, 13, 5, 4, 13, 5, 3, 8]
const options = bruteForcefindChoices(menu, 10);
console.log('BruteForce Answer: ', options)





// hashMap Answer 
// Complexity: O(n), storage: O(n)
// Problem: need to track when indexes have been used or each one will be repeated twice
// Solution: Delete map entry after use in menu
const findChoicesWithMap = (options, money) => {
  const map = {}
  const runningOptions = []
  for (let i = 0; i < menu.length; i ++) {
    if (map[menu[i]]) map[menu[i]].unshift(i)
    else map[menu[i]] = [i];
  }
  
  for (let i = 0; i < menu.length; i ++) {
    if (map[money - menu[i]]) {
      for (currCheckindex of map[money - menu[i]]) {
        if (currCheckindex !== i) runningOptions.push([i, currCheckindex])
      }
      delete map[menu[i]]
    }
  }
  return runningOptions;
}

const mapOptions = findChoicesWithMap(menu, 10);
console.log('Map Answer: ', mapOptions)


// Recursive Answer:
// complexity: O(nlog(n))
// sort and then use Binary Search
// Problem: Binary search only tells you the index of the item in a sort array so you would have to map it to the old array which would require a datastucture to store the original location 
// solution: WIP
const findChoicesRecusively = (menu, money) => {

  function binarySearch (array, target) {
    function search(array, target, start, end) {
      console.log(start, end)
      if (start > end) return -1;
      const midPoint = Math.floor((start + end) / 2)
      console.log(midPoint)
      if (array[midPoint] === target) return midPoint;
      else {
        if (array[midPoint] > target) return search(array, target, start, midPoint - 1)
        else return search(array, target, midPoint + 1, end);
      }
    }
    return search(array, target, 0, array.length - 1)
  }

  const sortedMenu = [...menu]
  sortedMenu.sort((a, b) => a - b)
  
  // const acumulatedOptions = [];
  // for (let i = 0; i < sortedMenu.length; i ++) {
  //   const complementIndex = binarySearch(sortedMenu.slice(i + 1), money - sortedMenu[i])
  //   acumulatedOptions.push([i, complementIndex + i + 1])
  // }

  // return acumulatedOptions;
}



console.log('Recursive answer: ', findChoicesRecusively(menu, 10))

