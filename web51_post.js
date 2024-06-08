var http = require('http');
var querystring = require('querystring');

http.createServer(function(req, res) {
    if (req.method === 'POST') {
        let data = '';

        req.on('data', chunk => {
            data += chunk;
        });

        req.on('end', () => {
            const qs = querystring.parse(data);
            const name = qs['username'];
            const email = qs['email'];
            const userType = qs['userType'];
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(`Welcome ${name}, your email ID is ${email}, you successfully signed in as ${userType} in our GKD book store.`);
            res.end();
        });
    } else {
        res.writeHead(405, { 'Content-Type': 'text/html' });
        res.end('<h1>405 Method Not Allowed</h1>');
    }
}).listen(3335);

console.log("Server started on port 3335");
