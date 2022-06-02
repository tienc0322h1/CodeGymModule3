const http = require('http');
const server = http.createServer((req, res) => {
    let text = '';
    if (req.url === "/login") {
        text = "Login succes!";
    }
    else {
        text = "Login false";
    }
    res.end(text);

} ).listen(8080, 'localhost');