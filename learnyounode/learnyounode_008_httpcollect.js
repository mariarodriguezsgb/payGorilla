var http = require ('http');

function getData (args, dataArr) {
  var info = '';
  http.get(args,function (response) {
    response.on('error', function(err){
      console.log(err);
    });

    response.on('data', function (data) {
      info = info.concat(data.toString());
    });

    response.on('end', function (){
      dataArr.push(info);
    })
  });
};

function allData () {
  var allData = [];
  for (var i = 2; i < process.argv.length; i++){
    getData (process.argv[i], allData);
  }

  if (allData.length == 3) {
    console.log(allData[0]);
    console.log(allData[1]);
    console.log(allData[2]);
  }
}
allData();
