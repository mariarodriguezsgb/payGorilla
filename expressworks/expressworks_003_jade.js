var express = require ('express');

var app = express ();
app.set('views',process.argv[3] || path.join(__dirname, 'templates'));
app.set('view engine', 'jade');
app.get('/home', function (request, response) {
  response.render('index', {date: new Date().toDateString()})
})
app.use(express.static(process.argv[3] || path.join(_dirname, 'public')));

app.listen(process.argv[2]);
