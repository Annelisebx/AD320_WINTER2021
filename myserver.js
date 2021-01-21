

const http = require('http');

let names = "<p1>Annelise</p1><p1>Rachel</p1><p1><p1>Savannah</p1>";

const myListener = function(req, res) {
    
    if (req.method === 'GET' || req.path === '/users') {

        res.write(names)
        res.end('get method....')
    }

    if (req.method === 'POST' && req.path === '/') {

        res.write('POST method....');


        
    }
    
    res.end('howdy howdy howdy');


}



const myServer = http.createServer(myListener);
myServer.listen(12345);
