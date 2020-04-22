// import Node.js core module
const http = require("http");

// creating server
let server = http.createServer(function(req, res) {
    // set url
    if (req.url == '/') {
        // set response header
        res.writeHead(200, { 'Content-Type': 'text/html'});

        // set response content
        res.write('<html><body><h3>This is Home Page</h3></body></html');
        res.end();
    } else if (req.url == '/profile') {
        // set response header
        res.writeHead(200, { 'Content-Type': 'text/html'});

        // set response content
        res.write('<html><body><h3>This is Profile Page</h3></body></html');
        res.end(); 
    } else if (req.url == '/contact') {
        // set response header
        res.writeHead(200, { 'Content-Type': 'text/html'});

        // set response content
        res.write('<html><body><h3>This is Contact Page</h3></body></html');
        res.end(); 
    } else if (req.url == '/aboutus') {
        // set response header
        res.writeHead(200, { 'Content-Type': 'text/html'});

        // set response content
        res.write('<html><body><h3>This is About Us Page</h3></body></html');
        res.end(); 
    } else if (req.url == '/data') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify({ "users" : [
            {
                "usersId": 1,
                "firstName": "Krish",
                "lastName": "Lee",
                "phoneNumber": "123456",
                "emailAddress": "krish.lee@learningcontainer.com"
            },

            {
                "userId": 2,
                "firstName": "racks",
                "lastName": "jacson",
                "phoneNumber": "123456",
                "emailAddress": "racks.jacson@learningcontainer.com"
            },

            {
                "userId": 3,
                "firstName": "denial",
                "lastName": "roast",
                "phoneNumber": "33333333",
                "emailAddress": "denial.roast@learningcontainer.com"
            },

            {
                "userId": 4,
                "firstName": "devid",
                "lastName": "neo",
                "phoneNumber": "222222222",
                "emailAddress": "devid.neo@learningcontainer.com"
            },

            {
                "userId": 5,
                "firstName": "jone",
                "lastName": "mac",
                "phoneNumber": "111111111",
                "emailAddress": "jone.mac@learningcontainer.com"
            }
        ]}));
        res.end();
    } else {
        res.end('Invalid Request!');
    }
});

// listen for any incoming requests
server.listen(3000);

console.log("Node.Js web server at port 3000 is running");