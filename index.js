var express = require('express')
var fs = require('fs')
var app = express()

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function (req, res) {
  fs.readFile('/proc/meminfo', (err, data) => {
    if (err) throw err;
    res.send(data)
  })
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

