var module = require('./learnyounode_006_makemodular_modulefile.js');

module(process.argv[2],process.argv[3], function(err, files){
  files.forEach(function(file){
  console.log(file);
  });
});
