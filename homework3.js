function pow(x, y) {
    let result = 1;
    for (let i = 0; i < y; i++) {
        result *= x;
    }
    return result;
}

console.log(pow(2, 3)); // перший варіант

function pow2(x, y) {
    let result = 1;
    let i = 0;

    while (i < y) {
        result *= x;
        i++;
    }
    return result;
}

console.log(pow2(2, 3)); // другий варіант 