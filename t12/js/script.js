"use strict"

let res = '';

function showTriangle(input) {
    for (let i = 0; i < input; i++) {
        for (let j = 0; j < i; j++) {
            res += '*';
        }
        res += '\n';
    }
    return res;
}

alert(`This page says
${showTriangle(8)}`);
