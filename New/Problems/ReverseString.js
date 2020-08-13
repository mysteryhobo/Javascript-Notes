// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Solution 1
function reverse(str) {
  return str.split('').reverse().join('');
}

// Solution 2: 
function reverse(str) {
 return str.split('').reduce((reversed, char) => char + reversed, '');
}

console.log(reverse('this is a test'))

module.exports = reverse;
