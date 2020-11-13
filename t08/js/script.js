"use strict"

let typeNumber = prompt('Type the number', '');

if (typeNumber == 1) {
    alert(typeNumber * 2 / 'a')
}
else if (typeNumber == 2) {
    alert((typeNumber - typeNumber) / 0)
}
else if (typeNumber == 3) {
    alert(0 * Infinity)
}
else if (typeNumber == 4) {
    alert((typeNumber * 40000000) == Infinity)
}
else {
    alert('Wrong input')
}
