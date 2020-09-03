





const reverseString = (inputString, outputString = '') => {
  if (inputString.length === 0) return outputString;
  else {
    return reverseString(inputString.slice(0, -1), outputString + inputString.slice(-1));
  }
}



console.log('output:', reverseString('hello world'));