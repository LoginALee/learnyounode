// Print the sum of numbers entered from console
// ex: node baby-steps 1 2 3  would print 6
let numbers = process.argv.slice(2);

let sum = (accumulator, currentVal) => Number(accumulator) + Number(currentVal);

console.log(numbers.reduce(sum));
