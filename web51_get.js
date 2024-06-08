const http = require("http");
const url = require("url");
const qs = require("querystring");

function onRequest(request, response) {
    const path = url.parse(request.url).pathname;
    console.log("Request for " + path + " received");
    const query = url.parse(request.url).query;
    const name = qs.parse(query)["username"];
    const email = qs.parse(query)["email"];
    const userType = qs.parse(query)["userType"];
    
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(`Welcome ${name}, your email ID is ${email}, and you have successfully signed in as ${userType} in our GKD book store.`);
    response.end(); 
}

http.createServer(onRequest).listen(3334);
console.log("Server has started");
