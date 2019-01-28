// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const charMap = {};

    let max = 0;
    let maxChar = '';

    for (let char of str) {
        charMap[char] = charMap[char] + 1 || 1;
    }

    for (const char in charMap) {
        if (charMap[char] > max) {
            max = charMap[char];
            maxChar = char;
        }
    }

    return maxChar;
}

module.exports = maxChar;

// My Solution
// function maxChar(str) {
//     let tempMap = {};
//     str.split('').forEach(c => 
//         tempMap[c] ? tempMap[c]++ : tempMap[c] = 1);
//     let maxChar = '';
//     let maxCount = 0;
//     for (const k in tempMap) {
//         if (tempMap.hasOwnProperty(k)) {
//             const e = tempMap[k];
//             if (e > maxCount) {
//                 maxCount = e;
//                 maxChar = k;
//             }
//         }
//     }
//     return maxChar;
// }

// Solution 1
// function maxChar(str) {
//     const charMap = {};

//     let max = 0;
//     let maxChar = '';

//     for (let char of str) {
//         charMap[char] = charMap[char] + 1 || 1;
//     }

//     for (const char in charMap) {
//         if (charMap[char] > max) {
//             max = charMap[char];
//             maxChar = char;
//         }
//     }

//     return maxChar;
// }
