const fs = require('fs');
const async = require('async');

async .parallel({
    fileA: (callback) => {
        fs.readFile(__dirname+"/fileA.txt", "utf-8", callback);
    },
    fileB: (callback) => {
        fs.readFile(__dirname+"/fileB.txt", "utf-8", callback);
    },
    fileC: (callback) => {
        fs.readFile(__dirname+"/fileC.txt", "utf-8", callback);
    },
}, (error, results) => {
    console.log(results.fileA);
    console.log(results.fileB);
    console.log(results.fileC);
    console.log(results);
});