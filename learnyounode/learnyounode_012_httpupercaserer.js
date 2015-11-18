var http = require ('http');
var map = require ('through2-map');

var myServer = http.createServer(function (request, response) {
  if (request.method != "POST") {
    responde.end("Method is not POST");
    return;
  }

  myInfo = request.pipe(map(function (chunk) {
    return chunk.toString().toUpperCase();
  }));

  myInfo.pipe(response);

});

myServer.listen(Number(process.argv[2]));
