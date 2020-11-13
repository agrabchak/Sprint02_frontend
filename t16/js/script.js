function firstElements(arr, n) {
    let arr1 = [];

    if (n <= arr.length) {
        for (let i = 0; i < n; i++) {
            arr1 += arr[i] + ', ';
        }
    }
    else if (n > arr.length) {
        arr1 = arr;
    }
    return arr1;
}

// let heroes = ["Captain America", "Hulk", "Thor", "Iron Man", "Spider-Man"];
//
// console.log(firstElements(heroes, 4));