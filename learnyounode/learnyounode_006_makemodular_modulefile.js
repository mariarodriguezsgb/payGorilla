var fs = require('fs');
var path = require('path');

module.exports = function (dirPath,ext,callback) {
  fs.readdir(dirPath,function doneDir(houston, files) {
    if (houston) {
      return callback(houston,null);
    }
    var filesExt = [];
    for (var i = 0; i < files.length ; i++){
      if (path.extname(files[i]) == "."+ext) {
        filesExt.push(files[i]);
      }
    }
    return callback(null, filesExt);
  });
};
