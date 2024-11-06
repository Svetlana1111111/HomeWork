function row(x, y) {
    let result = 1;
    for (let i = 0; i < y; i++) {
        result *= x;
    }
    return result;
}

console.log(row(2, 3)); // перший варіант

function row2(x, y) {
    let result = 1;
    let i = 0;

    while (i < y) {
        result *= x;
        i++;
    }
    return result;
}

console.log(row2(2, 3)); // другий варіант 