function solver(a, b, c, d, e)  {
    let x;

    if (typeof (a) != 'number' || typeof b != 'number' ||
        typeof c != 'number' || typeof d != 'number' ||
        typeof e != 'number' || !a || !b|| !c ||!d || !e)  {
        x = 'Wrong input'
    } else {
        x = a ** 2 - 5 * b * c + d / 3 + e;
        x = Number.parseFloat(x).toFixed(2);
    }
    return x;
}

