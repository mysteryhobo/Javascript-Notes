// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  const Direction = {right: 1, down: 2, left: 3, up: 4};
  const resultMatrix = [];
  for (let i = 0; i < n; i ++) {
    resultMatrix.push(new Array(n).fill('x'))
  }

  function fillNext(value, x, y, direction) {
    resultMatrix[y][x] = value;
    if (value >= n**2) return;
    const nextx = getNextX(direction, x);
    const nexty = getNextY(direction, y);

    if (resultMatrix[nexty] === undefined || resultMatrix[nexty][nextx] !== 'x') fillNext(value, x, y, getNextDirection(direction));
    else {
      fillNext(value + 1, nextx, nexty, direction);
    }
  }


  function getNextX(direction, x) {
    if (direction === Direction.left) return x - 1;
    else if (direction === Direction.right) return x + 1;
    else return x;
  }

  function getNextY(direction, y) {
    if (direction === Direction.up) return y - 1;
    else if (direction === Direction.down) return y + 1;
    else return y;
  }

  function getNextDirection(dir) {
    if (dir === Direction.right) return Direction.down;
    if (dir === Direction.down) return Direction.left; 
    if (dir === Direction.left) return Direction.up; 
    if (dir === Direction.up) return Direction.right; 
  }
  if (n !== 0) fillNext(1, 0, 0, Direction.right);
  return resultMatrix;
}

console.log(matrix(1))


module.exports = matrix;
