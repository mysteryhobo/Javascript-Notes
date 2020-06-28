// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const map = {};
  let currentHighestNumber = 0;
  let currentHighestCharacter = null;

  for (let currChar of str) {
    if (map[currChar] === undefined) map[currChar] = 1;
    else map[currChar] ++;

    if (map[currChar] > currentHighestNumber) {
      currentHighestNumber = map[currChar];
      currentHighestCharacter = currChar;
    }
  };
  return currentHighestCharacter
}

module.exports = maxChar;
