const _ = require('lodash');

console.log(_.chunk([1,2,3,4,5], 2));
console.log(_.uniq([1,2,2,3,5,5,6,7,8,4,4,23,4,]));
console.log(_.flatten([1,[2,[3]]]));

let result = _.chain([1,2,3,4,5,6,7,8,9,10])
              .map(n => n * 2)
              .filter(n => n > 5)
              .take(2)
              .value();

console.log(result);