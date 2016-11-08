var httpProxy = require('http-proxy');
var http = require('http');
var seaport = require('seaport');

var proxyservice = httpProxy.createProxyServer({});
var args = process.argv.splice(2);
var portlist = seaport.connect('localhost', 9090);
var i = -1;

http.createServer(function (req, res) {
    var serverlist = portlist.query('sa-webapp');
    if (!serverlist.length) {
        res.writeHead(503, {'Content-Type' : 'text/plain'});
        res.end('No servers available to service your request');
        return;
    }
    i = (i + 1) % serverlist.length;
    proxyservice.web(req, res, { target: ('http://localhost:'+ serverlist[i].port)});   
}).listen(args[0] || 8000);