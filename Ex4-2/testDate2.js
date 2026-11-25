let now = new Date();
let before = new Date(2004, 12, 9);

let tmp = now - before;
let result = Math.floor(tmp / (1000 * 60 * 60 * 24));
console.log(`${result}일이 지났습니다.`);
