'use strict'

let beginRange = prompt("Begin range is ...", '1');
let endRange = prompt("End range is ...", '100');

function checkDivision(beginRange, endRange) {
    // let res = '';

    if (beginRange === null || isNaN(+beginRange))
        beginRange = 1;
    if (endRange === null || isNaN(+endRange))
        endRange = 100;
    if (+beginRange > +endRange) {
        let tmp = beginRange;
        beginRange = endRange;
        endRange = tmp;
    }

    for (let i = beginRange; i <= endRange; i++) {
        if (i % 2 === 0 && i % 3 === 0 && i % 10 === 0) {
            console.log(i +
                ' is even, a multiple of 3, a multiple of 10');
        } else if (i % 10 === 0 && i % 2 === 0) {
            console.log(i + ' is even, a multiple of 10');
        } else if (i % 2 === 0 && i % 3 === 0) {
            console.log(i + ' is even, a multiple of 3');
        } else if (i % 3 === 0) {
            console.log(i + ' is a multiple of 3');
        } else if (i % 2 === 0) {
            console.log(i + ' is even');
        } else {
            console.log(i + ' -');
        }
    }
}

checkDivision(beginRange, endRange);