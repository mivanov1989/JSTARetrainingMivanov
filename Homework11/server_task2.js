const server = require('http');
const os = require('os');
const myModule = require('./personalmodule');

server.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end(`${myModule.greetUser(os.userInfo().username)}`);
}).listen(8000);

