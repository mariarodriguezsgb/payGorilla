var fs = require ('fs');
var http = require ('http');

var myServer = http.createServer(function (request, response) {
  var fileStream = fs.createReadStream(process.argv[3]);

  fileStream.on("open", function() {
    fileStream.pipe(response);
  });

  fileStream.on("error", function() {
    response.end('Error!');
  });
});

myServer.listen(Number(process.argv[2]));
