const apartment = {
    location: "Kyiv",
    square: 60,
    floor: 3,
    price: "190000 $",

    getinfo: function() {
        for (let key in this)
            if (typeof this[key] !== 'function') {
                console.log(`${key}: ${this[key]}`);
            }
    }
};

apartment.getinfo();
apartment.condition = "new";
console.log("---------------")
apartment.getinfo();