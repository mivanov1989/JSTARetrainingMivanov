const http = require('http');
var static = require('node-static');
var file = new static.Server('.', {cache: -1});
function accept(req, res) {
if (req.url == '/books.json') {
file.serve(req, res);		
} if (req.url == '/vote.txt') {
file.serve(req, res);	
}
 else {
file.serve(req, res);
}
}
// ------ run server -------
http.createServer(accept).listen(5555);
console.log("Server running on port 5555");
