var http = require ('http');
var bl = require ('bl');

function getData () {
  http.get(process.argv[2], function (response) {
    response.pipe(bl(function (err,data){
      if (err) return console.log(err);
      var myData = data.toString();
      console.log(myData.length);
      console.log(myData);
    }))
  });
};

getData();
