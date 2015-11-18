var http = require ('http');
var map = require ('through2-map');
var url = require ('url');

var myServer = http.createServer(function (request, response) {
  if (request.method != "GET") {
    responde.end("Method is not GET");
    return;
  }

  var myUrl = request.url;
  var myUrlObject = url.parse(request.url, true);
  var myPath = myUrlObject.pathname.toLowerCase();
  var myQuery = myUrlObject.query;
  var iso = myQuery.iso;
  var date = new Date(iso);

  response.writeHead(200, {
    'Content-Type': 'application/json'
  });

  var data = null;
  if (myPath === '/api/parsetime') {
    data = {
      "hour": date.getHours(),
      "minute": date.getMinutes(),
      "second": date.getSeconds()
    };
  }
  else if (myPath === '/api/unixtime') {
    data = {
      "unixtime": date.getTime()
    };
  }

  if (data != null) {
      var realData = JSON.stringify(data);
      response.write(realData);
  }

  response.end;

});

myServer.listen(Number(process.argv[2]));
