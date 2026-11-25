const fs = require('fs');

fs.writeFileSync(__dirname+'output.txt', '안녕하세요...!');
console.log('파일 쓰기를 완료했습니다.')