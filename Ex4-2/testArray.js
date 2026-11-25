let array = [{
    name: '송편',
    price: 1000
},
{
    name: '만두',
    price: 500
},
{
    name: '전',
    price: 1500
}];

let popped = array.pop();
console.log('pop한 요소')
console.log(popped);
console.log('pop한 후의 배열');
console.log(array);

let pushed = {
    name: '동그랑땡',
    price: 2000
};
array.push();
console.log('push한 요소');
console.log(pushed);
console.log('push한 후의 배열');
console.log(array);