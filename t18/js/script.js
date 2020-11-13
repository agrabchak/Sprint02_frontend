'use strict'

// function sortEvenOdd(arr) {
//     return arr.sort(function(a, b) {
//         return a % 2 - b % 2 || a - b;
//     });
// }

function mySort(a, b) {
    if (a % 2 === 0 && b % 2 === 0)
        return a - b;
    else if (a % 2 === 0)
        return -1;
    else if (b % 2 === 0)
        return 1;
    else
        return a - b;
}

function sortEvenOdd(arr) {
    if (arr)
        arr.sort(mySort);
}
// const arr = [6, 2, 15, 5, 1, 3, 8, 1, 8, 10, 7, 11];
//
// function sortEvenOdd(arr) {
//     arr = arr.sort(function(a, b) {
//         return a - b;
//     });
//     console.log(arr);
//     for (let i = 0; i < arr.length; i++) {
//         let num = arr[i];
//         let flag = false;
//         if (arr[i] % 2 === 0) {
//             flag = true;
//         }
//         if (flag) {
//             continue;
//         }
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[j] % 2 === 0) {
//                 arr[i] = arr[j];
//                 arr[j] = num;
//                 break;
//             }
//         }
//     }
//     return arr;
// }