// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


// // Solution 1: Ascii
// function anagrams(stringA, stringB) {
//   const characterMap = {};
//   for (let currChar of stringA.toLowerCase()) {
//     const asciiCode = currChar.charCodeAt(0)
//     if (asciiCode > 96 && asciiCode < 123) {
//       if (characterMap[currChar] === undefined) characterMap[currChar] = 1;
//       else characterMap[currChar]++;
//     }
//   }

//   for (let currChar of stringB.toLowerCase()) {
//     const asciiCode = currChar.charCodeAt(0)
//     if (asciiCode > 96 && asciiCode < 123) {
//       if (!characterMap[currChar]) return false;
//       else characterMap[currChar] --;
//     }
//   }
//   return true;
// }

// //Solution 2: Regex
// function anagrams(stringA, stringB) {
//   const characterMap = {};
//   const normalizedStringA = stringA.replace(/[^\w]/g, '').toLowerCase()
//   const normalizedStringB = stringB.replace(/[^\w]/g, '').toLowerCase()
//   for (let currChar of normalizedStringA) {
//     if (characterMap[currChar] === undefined) characterMap[currChar] = 1;
//     else characterMap[currChar]++;
//   }

//   for (let currChar of normalizedStringB) {
//     if (characterMap[currChar] === undefined) return false;

//     characterMap[currChar] --;
//     if (characterMap[currChar] === 0) delete characterMap[currChar];
//   }
//   if (Object.keys(characterMap).length > 0) return false;
//   return true;
// }


// //Solution 3: Regex + length compare
// function anagrams(stringA, stringB) {
//   const characterMap = {};
//   const normalizedStringA = stringA.replace(/[^\w]/g, '').toLowerCase()
//   const normalizedStringB = stringB.replace(/[^\w]/g, '').toLowerCase()
//   if (normalizedStringA.length !== normalizedStringB.length) return false;

//   for (let currChar of normalizedStringA) {
//     if (characterMap[currChar] === undefined) characterMap[currChar] = 1;
//     else characterMap[currChar]++;
//   }

//   for (let currChar of normalizedStringB) {
//     if (characterMap[currChar] === undefined) return false;
//     characterMap[currChar] --;
//   }
//   return true;
// }

//Solution 4: Sort String
function anagrams(stringA, stringB) {
  return normalizeString(stringA) === normalizeString(stringB);
}

function normalizeString(str) {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')
}

anagrams('hello', 'llohe')

module.exports = anagrams;
