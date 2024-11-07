function pow(x, y) {
    let result = 1;
    if (x === 0 && y === 0) {
        return NaN;
    }
    else if (x === 0 && y < 0) {
        return NaN;
    }
    else if (x === 0 && y > 0) {
        return 0;
    }
    else if (y === 0) {
        return 1;
    }
    else if (y < 0) {
        for (let i = 0; i > y; i--) {
            result *= x;
        }
        return 1 / result
    }
    else {
        for (let i = 0; i < y; i++) {
            result *= x;
        }
        return result;
    }
}
console.log(pow((2), (-3))); // перший варіант

// я намагалась покрити такі випадки 
console.log(2 ** 0);    // 1
console.log((-2) ** 0);  // 1
console.log(2 ** (3));    // 8
console.log((-2) ** 3);   // -8
console.log((0) ** (0));  // NaN
console.log((0) ** (-3)); // NaN
console.log((0) ** (3));  // 0
console.log((-2) ** (-3)); // -0,125
console.log((2) ** (-3)); // 0,125


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

