// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'


const { performance } = require('perf_hooks');

// Solution Recursive:
function pyramid(n) {
  function logLine(n, prevLine, left, right) {
    if (left >= 0) {
      prevLine = replaceCharAt(prevLine, left, '#');
      prevLine = replaceCharAt(prevLine, right, '#');
      // console.log(`"${prevLine}"`);
      setTimeout(() => logLine(n, prevLine, left - 1, right + 1));
    }
  }

  function replaceCharAt(string, index, newCharacter) {
    return string.slice(0, index) + newCharacter + string.slice(index + 1)
  }

  const midPoint = n - 1
  const blankString = new Array(((n - 1) * 2) + 2).join(' ');
  logLine(n, blankString, midPoint, midPoint)
  console.log('done')
}


function pyramid2(n) {
  const numOfColumns = n * 2 - 1;
  for (let row = 0; row < n; row ++) {
    let line = '';
    const numOfSpaces = n - 1 - row;
    for (let col = 0; col < numOfColumns; col ++) {
      if (numOfSpaces <= col && col < numOfColumns - numOfSpaces) line += '#';
      else line += ' ';
    }
    // console.log(line)
  }
  console.log('done')
}

var t0 = performance.now()
pyramid2(30000)
var t1 = performance.now()
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.")
module.exports = pyramid;
