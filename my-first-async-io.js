// Write a program that uses a single asynchronous filesystem operation to
//   read a file and print the number of newlines it contains to the console
//   (stdout), similar to running cat file | wc -l.

const fs = require("fs");
const filePath = process.argv[2];

fs.readFile(filePath, (err, data) => {
  if (err) throw err;
  data = data.toString().split("\n");
  console.log(data.length - 1);
});
