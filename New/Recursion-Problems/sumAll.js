



const sumAll = (n) => {
  if (n === 1) return 1;
  return sumAll(n-1) + n;
}

