let height = 1.65
let weight = 60
BMI = weight / (height ** 2)

function bmiCategory(BMI) {
    if (BMI < 18.5) {
        return "Недостатня вага";
    } else if (18.5 <= BMI < 24.9) {
        return "Нормальна вага";
    } else if (25 <= BMI < 29.9) {
        return "Надлишкова вага";
    } else if (BMI >= 30) {
        return "Ожиріння";
    }
}
console.log(bmiCategory(BMI))


let a = 10
let b = 100
let c = 1

function triangleType(a, b, c) {
    if (isTriangle(a, b, c) == false) {
        return "Це не трикутник"
    }
    else if (a == b == c) {
        return "Рівносторонній трикутник"
    }
    else if (a == b || a == c || c == b) {
        return "Рівнобедренний трикутник"
    }
    else if (a != b != c) {
        return "Різносторонній трикутник"
    }
}

function isTriangle(a, b, c) {
    if (a + b > c && a + c > b && b + c > a)
        return true
    else
        return false
}

console.log(triangleType(a, b, c))
