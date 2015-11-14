var fs = require('fs');
var lines= undefined;

function fileAsync (callback){
  fs.readFile(process.argv[2], 'utf8', function doneFile(houston, fileContent){
  lines=(fileContent.split('\n').length)-1;
  callback();
});
}

function printNumber (){
    console.log(lines);
}

fileAsync(printNumber);
