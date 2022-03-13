const fs = require('fs');
var str =fs.readFileSync(process.argv[2],'utf8').toString().split('\n').length - 1;
console.log(str);
