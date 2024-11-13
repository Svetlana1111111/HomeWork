var services = {
    "стрижка": "60.9 грн",
    "гоління": "80.5 грн",
    "Миття голови": "100 грн",

    price: function() {
        let sum = 0;
        for (let key in this) {
            if (typeof this[key] === 'string' && this[key].includes("грн")) {
                sum += parseFloat(this[key]);
            }
        }
        return sum + "грн"
    },
    maxPrice: function() {
        let maxNum = 0;
        for (let key in this) {
            if (typeof this[key] === 'string' && this[key].includes("грн")) {
               let num = parseFloat(this[key]);
                maxNum = Math.max(num);
            }
        }
        return maxNum + "грн";
    },
    minPrice: function() {
        let minNum = Infinity;
        for (let key in this) {
            if (typeof this[key] === 'string' && this[key].includes("грн")) {
               let num = parseFloat(this[key]);
                if (minNum > num) {
                    minNum = Math.min(num);
                }
            }
        }
        return minNum + "грн";
    }
}

services['Розбити скло'] = "300 грн";

console.log(services.price());
console.log(services.maxPrice());
console.log(services.minPrice());