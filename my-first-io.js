// Count the number of line splits of a file
const fs = require("fs");

let buffer = fs.readFileSync(process.argv[2]);
buffer = buffer.toString();
const splittedBuffer = buffer.split("\n");

console.log(splittedBuffer.length - 1);
