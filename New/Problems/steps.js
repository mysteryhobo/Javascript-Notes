// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'


// Solution 1: interative
function steps(n) {
  let prevString = new Array(n + 1).join(' ');
  for (let i = 0; i < n; i ++) {
    prevString = replaceCharAt(prevString, '#', i);
    console.log(prevString)
  }
}

function replaceCharAt(str, char, index) {
  return str.slice(0, index) + char + str.slice(index + 1);
}


// Solution 2: recursion
function steps(n, row = 1, string = '') {
  if (row > n) return;
  else if (string.length === n){
    console.log(string);
    return steps(n, row + 1);
  }
  else {
    if (string.length < row) steps(n, row, string + '#')
    else steps(n, row, string + ' ');
  }
}


steps(5);

module.exports = steps;
