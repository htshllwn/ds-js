// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
    return str.replace(/[^\w]/g, '')
        .toLowerCase()
        .split('')
        .sort()
        .join('');
}

module.exports = anagrams;

// My Solution
// function anagrams(stringA, stringB) {
//     stringA = stringA.replace(/[^\w]/g, "").toLowerCase().split('');
//     stringB = stringB.replace(/[^\w]/g, "").toLowerCase().split('');

//     let charMapA = {};
//     let charMapB = {};

//     stringA.forEach(c => charMapA[c] = charMapA[c] + 1 || 1);
//     stringB.forEach(c => charMapB[c] = charMapB[c] + 1 || 1);

//     if (Object.keys(charMapA).length === Object.keys(charMapB).length) {
//         for (const key in charMapA) {
//             if (
//                 charMapA.hasOwnProperty(key) && 
//                 charMapB.hasOwnProperty(key) &&
//                 charMapA[key] === charMapB[key]
//                 ) {
//             } else {
//                 return false;
//             }
//         }    
//     } else {
//         return false;
//     }

//     return true;

// }

// Solution 1
// function anagrams(stringA, stringB) {
//     const aCharMap = buildCharMap(stringA);
//     const bCharMap = buildCharMap(stringB);

//     if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//         return false;
//     }

//     for (const char in aCharMap) {
//         if (aCharMap[char] !== bCharMap[char]) {
//             return false;
//         }
//     }

//     return true;

// }

// function buildCharMap(str) {
//     const charMap = {};

//     for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
//         charMap[char] = charMap[char] + 1 || 1;
//     }

//     return charMap;
// }

// Solution 2
// function anagrams(stringA, stringB) {
//     return cleanString(stringA) === cleanString(stringB);
// }

// function cleanString(str) {
//     return str.replace(/[^\w]/g, '')
//         .toLowerCase()
//         .split('')
//         .sort()
//         .join('');
// }
