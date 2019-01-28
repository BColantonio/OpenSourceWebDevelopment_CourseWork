const http = require('http');
const server = http.createServer();
const url = require('url');
var fileSystem = require('fs');

const requestListener = (req, res) => {
    var pathName = url.parse(req.url).pathname;
    var fileName = pathName.substr(1);
    fileSystem.readFile(resolveFile(fileName), callback);
    
    function resolveFile (fileName){
        switch (fileName){
            default:
            case "index":
            case "index.html":
                fileName = "index.html"
                break;
            case "todo":
            case "todo.json":
                fileName = "todo.json"
                break;
            case "read-todo":
            case "read-todo.html":
                fileName = "read-todo.html"
                break;         
        }    
        return fileName;
    }
    function contentType (fileName){
        switch (fileName){
            default:
            case "index":
            case "index.html":
                contentType = "'Content-Type': 'text/html'"
                break;
            case "todo":
            case "todo.json":
            case "read-todo":
            case "read-todo.html": 
                contentType = "'Content-Type': 'application/json'";
                break;     
        }    
        return contentType;
    }

    function callback(err, data) {
        if(err) {
            console.error(err);
            res.writeHead(400, {'Content-Type': 'text/html'});
            res.write('<!DOCTYPE html><html><body><div>Page Not Found</div></body></html>');
        } else {
            console.log(fileName)
            res.writeHead(200, contentType(fileName));
            res.write(data.toString());
        }
        res.end();

    }
};

server.on('request', requestListener);

server.listen(3000, () => {
    console.log('Server is running...');
});