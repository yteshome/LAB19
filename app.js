//SERVER.JS
var http = require('http');
var stuff= require('./stuff.js');

// console.log(stuff);

http.createServer(function(request, response){
  response.writeHead(200, {"Content-type": "text/plain"});
  response.write(stuff[Math.floor(Math.random() * stuff.length)]);
  response.end();
}).listen(8888);
