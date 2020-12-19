const server = require('http');
const os = require('os');
const path = require('path');

server.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end(
        `System Information\n
Current user name: ${os.userInfo().username}\n
OS type: ${os.type()}\n
System work time: ${((os.uptime())/60).toFixed(2)} minutes\n
Current work directory: ${path.dirname(__filename)}\n
Server file name: ${path.basename(__filename)}`
        );
}).listen(5000);

