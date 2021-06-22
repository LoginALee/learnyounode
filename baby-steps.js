let numbers = process.argv.slice(2);

let sum = (accumulator, currentVal) => Number(accumulator) + Number(currentVal);

console.log(numbers.reduce(sum));
