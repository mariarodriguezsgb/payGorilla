var http = require('http');

function getData () {
  http.get(process.argv[2], function (response){
    response.setEncoding('utf8');
    response.on('error', function (err){
      console.log(err);
    });

    response.on('data', function(data){
      console.log(data);
    });
  });
}

getData();
