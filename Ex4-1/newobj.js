var sayNode = function() {
    console.log('Node');
};
var es = 'ES';
const newObject = {
    sayJS() {
        console.log('JS');
    },
    sayNode,
    [es + 6]: '20233054',
};
newObject.sayNode();
newObject.sayJS();
console.log(newObject.ES6);