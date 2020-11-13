'use strict'

function total(addCount, addPrice, currentTotal = 0) {
    return currentTotal += addPrice * addCount;
}

// sum = total(1, 0.1);
// sum = total(1, 0.2, sum);
// sum = total(1, 0.78, sum);
// sum = total(2, 1, sum);
// console.log(sum); // will return 1.08