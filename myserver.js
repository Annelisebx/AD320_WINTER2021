

const http = require('http');

let names = "<p1>Annelise<br>Rachel<br>Savannah</p1>";

const myListener = function(req, res) {
    
    //responds the request is 'GET' method and path is '/users'
    if (req.method === 'GET' && req.path === '/users') {

        res.write(names)
        res.end()
    }
    
    //responds if request is with 'POST' method and '/' path
    if (req.method === 'POST' && req.path === '/') {

        
        res.write('POST method....');

        //need to return and respond with JSON object which is html file
        res.end()
        
    }
    

}

//creates server with http
const myServer = http.createServer(myListener);
//has the server I created listen to port(?) 12345 - initiates this script when requested from browser
myServer.listen(12345);
