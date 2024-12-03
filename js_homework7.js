var arr = [
    {
        userName: "Test",
        lastName: "Test",
        email: "test.test@gmail.com"
    },
    {
        userName: "Dmitro",
        lastName: "Porohov",
        email: "dmitro.porohov@yahoo.com"
    },
    {
        userName: "Andrii",
        lastName: "",
        email: "andrii@mail.ru" // Нам такі не підходять
    }
    
];

function addValidEmailToArr() {
    const validEmail = [];
        arr.forEach((item) => {
            const pattern = /\b[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?@(gmail\.com|yahoo\.com)\b/;
            const matches = pattern.test(item.email);
            if (matches) {
                validEmail.push(item.email);
            }
        });
    return validEmail;
}
console.log(addValidEmailToArr());
