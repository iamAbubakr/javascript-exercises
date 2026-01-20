const factorial = function (n) {
    if (n === 0) {
        return 1;
    }
    else if (n < 0) {
        return undefined;
    }
    else {
        return n * factorial(n - 1);
    }
};
console.log(factorial(6));

// Do not edit below this line
module.exports = factorial;