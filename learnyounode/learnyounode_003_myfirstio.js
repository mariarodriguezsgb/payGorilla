var fs = require('fs');
var arrl = (fs.readFileSync(process.argv[2],'utf8').split('\n').length)-1;
console.log(arrl);
