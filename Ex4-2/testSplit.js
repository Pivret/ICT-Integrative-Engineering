let string = '감자,고구마,바나나,사과';
let array = string.split(',');
console.log(`${string}\n${array}`);

let string2 = array.join('');
console.log(string2);
string2 = array.join(',');
console.log(string2);