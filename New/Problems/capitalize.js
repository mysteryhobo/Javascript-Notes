// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

//Solution 1: word by word
function capitalize(str) {
  const words = str.split(' ')
  const capitalizedWords = []

  words.forEach(currentWord => {
    capitalizedWords.push(currentWord[0].toUpperCase() + currentWord.slice(1))
  });

  return capitalizedWords.join(' ')
}

//Solution 2: letter by letter
function capitalize(str) {
  let prevCharacter;
  let result = str[0].toUpperCase();

  for (let currChar of str.slice(1)) {
    if (prevCharacter === ' ') result += currChar.toUpperCase();
    else result += currChar;
    prevCharacter = currChar;
  }

  return result;
}

module.exports = capitalize;
