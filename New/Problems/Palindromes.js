// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// Solution 1: reverse and loop compare
function palindrome(str) {
  const reversedString = str.split('').reverse();
  for (let i = 0; i < str.length; i ++) {
    if (str[i] !== reversedString[i]) return false;
  }
  return true;
}

// Solution 2: reverse and compare
function palindrome(str) {
  const reversedString = str.split('').reverse().join('');
  return reversedString === str;
}

//Solution 3: array.Every
function palindrome(str) {
  return str.split('').every((currChar, index) => currChar === str[str.length - 1 - index])
}

// Solution 4: two iterators
function palindrome(str) {
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) return false;
    left ++;
    right --;
  }
  return true;
}

console.log(palindrome('this is a test'));

module.exports = palindrome;
