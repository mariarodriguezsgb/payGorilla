var net = require ('net');

//Funcion extraida de http://stackoverflow.com/questions/2998784/how-to-output-integers-with-leading-zeros-in-javascript
function pad(num) {
    var s = num.toString();
    while (s.length < 2) s = "0" + s;
    return s;
}

var myServer = net.createServer(function (socket) {
  var currentDate = new Date();
  var myHours = pad(currentDate.getHours());
  var myMin = pad(currentDate.getMinutes());
  var myDay = pad(currentDate.getDate());
  var myMonth = pad(currentDate.getMonth()+1);
  var myYear = pad(currentDate.getFullYear());
  var fullDate = myYear + '-' + myMonth + '-' + myDay + ' ' + myHours  + ':' + myMin;
  socket.end(fullDate + '\n');
});

myServer.listen(Number(process.argv[2]));
