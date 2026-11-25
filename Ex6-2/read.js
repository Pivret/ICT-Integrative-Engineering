const fs = require('fs');

const file1 = fs.readFileSync(__dirname+'/textfile.txt');
const file2 = fs.readFileSync(__dirname+'/textfile.txt',{encoding:'utf8', flag:'r'});

console.log(file1);
console.log(file1.toString());

console.log("----------------------");
console.log(file2);
console.log(file2.toString());