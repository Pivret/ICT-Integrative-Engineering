const url = require('url');

const parseObject = url.parse('https://developer.mozilla.org/en-US/', true, true);
console.log(parseObject);