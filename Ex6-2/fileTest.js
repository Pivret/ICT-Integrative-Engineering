const fs = require('fs');

fs.readFile(__dirname+'/textfile.txt', (error, file)=> {
    console.log(file);
    console.log(file.toString());
});