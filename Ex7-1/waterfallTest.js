const async = require('async');
let timestamp = new Date().getTime();

async.waterfall([
    (callback) => {
        setTimeout(()=>{
            console.log('나는');
            callback(null, '나는');
        }, 2000);
    },
    (arg, callback) => {
        setTimeout(()=>{
            console.log('임해주');
            callback(null, '임해주');
        }, 1000);
    },
    (arg, callback) => {
        setTimeout(()=>{
            console.log('입니다.');
            callback(null, '입니다.');
        }, 3000);
    }
], (err, results)=>{
    console.log(results, 'in ', new Date().getTime() - timestamp, 'ms');
});