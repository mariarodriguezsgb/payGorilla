var express = require ('express');
var bodyparser = require ('body-parser');

var app = express ();
app.use(express.static(process.argv[3] || path.join(_dirname, 'public')));
app.use (require('stylus').middleware(process.argv[3]))

app.listen(process.argv[2]);
