var fs = require('fs');
var lines= undefined;
var arrl = fs.readFile(process.argv[2], 'utf8', function doneFile(houston, fileContent){
  lines=(fileContent.split('\n').length)-1;
  console.log(lines);
});
