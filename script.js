// Rest
const opsomming = (...nums) => {
    const resultaat = nums.reduce((prev, total) => {
        return prev + total;
    })
    return resultaat;
}

console.log(opsomming(1, 8, 4, 3, 21));

// Spread
const getallenlijst = [5, 24, 2, 8, 7, 16]

const opsomming2 = (num1, num2, num3) => num1 + num2 + num3

console.log(opsomming2(...getallenlijst))





