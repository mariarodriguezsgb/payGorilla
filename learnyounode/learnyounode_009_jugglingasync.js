var http = require ('http');
var bl = require ('bl');
var allData=[];

function printData(){
  for (var i=2;i<process.argv.length;i++){
    console.log(allData[process.argv[i]]);
  }
}

function getData (arg) {
  http.get(arg, function (response) {
    response.pipe(bl(function (err,data){
      if (err) return console.log(err);
      var myData = data.toString();
      allData[arg] = myData;
      if (Object.keys(allData).length==3) {
        printData();
      }
    }))
  });
};

function getMoreData() {
  for (var i=2;i<process.argv.length;i++){
    getData(process.argv[i]);
  }
}

getMoreData();
