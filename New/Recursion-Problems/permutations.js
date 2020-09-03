




const getPermutations = (inputArray) => {
  if (inputArray.length === 1) return [inputArray];
  const permutations = []
  for (let i = 0; i < inputArray.length; i ++) {
    let subPermutations = getPermutations([...inputArray.slice(0, i), ...inputArray.slice(i + 1)]);
    // let subpermentations = [[2]]
    for (let j = 0; j < subPermutations.length; j ++ ) {
      permutations.push([...subPermutations[j], inputArray[i]]);
    }
  }
  return permutations;
}



// const test = [1,2,3,4];

// console.log('output:', getPermutations(test));




const test = [].push([1,2,3,4])
console.log('test:', test);