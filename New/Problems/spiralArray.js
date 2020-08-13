


const array = [
  [1,  2, 3, 4],
  [5,  6, 7, 8],
  [9, 10,11,12],
  [13,14,15,16]
]

const printSpiral = (array) => {
  console.log('output: ', getNextCell(array).join(' '));
}

const getNextCell = (array, accuString = [], x = 0, y = 0, dir = 'right') => {
  if (array[y] === undefined || array[y][x] === undefined) return accuString;
  accuString.push(array[y][x]);
  array[y][x] = undefined;
  const nextX = getNextX(x, dir);
  const nextY = getNextY(y, dir);
  if (array[nextY] !== undefined && array[nextY][nextX] !== undefined) return getNextCell(array, accuString, nextX, nextY, dir);
  const newDirection = getNextDir(dir);
  return getNextCell(array, accuString, getNextX(x, newDirection), getNextY(y, newDirection), newDirection);
}


const getNextX = (x, direction) => {
  if (direction === 'left') return x - 1;
  if (direction === 'right') return x + 1;
  return x;
}

const getNextY = (y, direction) => {
  if (direction === 'up') return y - 1;
  if (direction === 'down') return y + 1;
  return y;
}

const getNextDir = (direction) => {
  if (direction === 'right') return 'down';
  if (direction === 'down') return 'left';
  if (direction === 'left') return 'up';
  if (direction === 'up') return 'right';
}

printSpiral(array);