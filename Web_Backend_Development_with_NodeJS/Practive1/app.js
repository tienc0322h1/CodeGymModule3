const http = require('http');
const server = http.createServer((req, res) => {
    res.write('<h1>Hello World!</h1><hr>');
    res.end();
} );
server.listen(8080, 'localhost');