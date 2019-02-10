// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, level = '') {
    if (row === n) {
        return;
    }

    if (level.length === 2 * n - 1) {
        console.log(level);
        return pyramid(n, row + 1);
    }

    const midpoint = Math.floor((2 * n - 1) / 2);
    let add;
    if (midpoint - row <= level.length && midpoint + row >= level.length) {
        add = '#';
    } else {
        add = ' ';
    }
    pyramid(n, row, level + add);
}

module.exports = pyramid;

// My Solution
// function pyramid(n) {
//     for (let i = 0; i < n; i++) {
//         let row = '';
//         let noOfStars = (i * 2) + 1;
//         let noOfSpaces = (((n - 1) * 2) + 1 - noOfStars) / 2;
//         for (let j = noOfSpaces; j >= 1; j--) {
//             row += ' ';
//         }
//         for (let j = noOfStars; j > 0; j--) {
//             row += '#';
//         }
//         for (let j = noOfSpaces; j >= 1; j--) {
//             row += ' ';
//         }
//         console.log(row);
//     }
// }

// Solution 1
// function pyramid(n) {
//     const midpoint = Math.floor((2 * n - 1) / 2);
//     for (let row = 0; row < n; row++) {
//         let level = '';
        
//         for (let column = 0; column < 2 * n - 1; column++) {
//             if (midpoint - row <= column && midpoint + row >= column) {
//                 level += '#';
//             } else {
//                 level += ' ';
//             }
//         }
//         console.log(level);
//     }
// }

// Solution 2
// function pyramid(n, row = 0, level = '') {
//     if (row === n) {
//         return;
//     }

//     if (level.length === 2 * n - 1) {
//         console.log(level);
//         return pyramid(n, row + 1);
//     }

//     const midpoint = Math.floor((2 * n - 1) / 2);
//     let add;
//     if (midpoint - row <= level.length && midpoint + row >= level.length) {
//         add = '#';
//     } else {
//         add = ' ';
//     }
//     pyramid(n, row, level + add);
// }
