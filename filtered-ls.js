// Create a program that prints a list of files in a given directory,
//   filtered by the extension of the files. You will be provided a directory
//   name as the first argument to your program (e.g. '/path/to/dir/') and a
//   file extension to filter by as the second argument.
const fs = require("fs");
const path = require("path");

const filePath = process.argv[2];
const fileExtension = `.${process.argv[3]}`;

fs.readdir(filePath, (err, data) => {
  if (err) {
    console.log(err);
  }
  let filteredData = data.filter((file) => path.extname(file) == fileExtension);
  for (const file of filteredData) {
    console.log(file);
  }
});
