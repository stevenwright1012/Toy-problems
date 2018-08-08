// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits. For example:

function sumDigits(num) {
    let arr = num.toString().split('')
    let filter = arr.filter(val => +val)
    return filter.reduce((prev, next) => prev + +next, 0)
}

let test = sumDigits(-35)
test