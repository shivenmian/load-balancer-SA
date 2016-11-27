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
	console.log("Source IP issss: ");
	var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
	console.log("Request Ip: %s",ip);
	var len = ip.length;
	var sum = 0;
	var sumtemp = 0;
	for(var i = 0; i<len;i++){
		if(ip[i]!=':'){
			sumtemp = sumtemp * 10;
			sumtemp = sumtemp + ip.charCodeAt(i)-48;
		}
		else{
			sum = sum + sumtemp;
			sumtemp = 0;
		}
	}
	sum = sum + sumtemp;
	console.log("SUM:\t\t%d",sum);
	

    sum = sum % serverlist.length;
	var len = ip.length;
	console.log("%d",serverlist[sum].port);
    proxyservice.web(req, res, { target: ('http://localhost:'+ serverlist[sum].port)});   
}).listen(args[0] || 8000);