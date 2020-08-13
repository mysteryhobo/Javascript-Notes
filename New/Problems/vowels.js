// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

//Solution 1: 
function vowels(str) {
  const vowelsList = ['a', 'e', 'i', 'o', 'u'];
  let vowelCount = 0;
  for (let currChar of str.toLowerCase()) {
    if (vowelsList.includes(currChar)) vowelCount ++;
  }
  return vowelCount;
}


// Solution 2: Regex
function vowels(str) {
  const matches = str.matches(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

module.exports = vowels;
