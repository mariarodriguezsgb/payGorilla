var fs = require('fs');
var path = require('path');
var filesExt = [];

function getFiles (callback){
  fs.readdir(process.argv[2],function doneDir(houston, files) {
    for (var i = 0; i < files.length ; i++){
      if (path.extname(files[i]) == "."+process.argv[3]) {
        filesExt.push(files[i]);
      }
    }
    callback();
  });
}

function printFiles(){
  for (var i = 0; i < filesExt.length ; i++) {
    console.log(filesExt[i]);
  }
}

getFiles(printFiles);
