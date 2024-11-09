function checkProbabilityTheory(count) {
    let result = [];
    let totalCount = 0;
    let even = 0;
    let odd = 0;
    let percentEven = 0;
    let percentOdd = 0;

    for (let i = 0; i < count; i++) {
        const min = 100;
        const max = 1000;
        const randomInRange = Math.floor(Math.random() * (max - min + 1)) + min;
        result.push(randomInRange);
        //console.log(randomInRange);

        if (randomInRange % 2 === 0) {
            even++;
        }
        else {
            odd++;
        }

        totalCount = even + odd;
        percentEven = ((even / totalCount) * 100).toFixed(2);
        percentOdd = ((odd / totalCount) * 100).toFixed(2);
      
    }
    return {
        totalCount: totalCount, 
        even: even,
        odd: odd,
        percentEven: percentEven + '%',
        percentOdd: percentOdd + '%'
    }
}
console.log(checkProbabilityTheory(20))