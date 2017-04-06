// TODO: fix async stuff

var httpProxy = require('http-proxy');
var http = require('http');
var seaport = require('seaport');

var proxyservice = httpProxy.createProxyServer({});
var args = process.argv.splice(2);
var portlist = seaport.connect('localhost', 9090);
var socketio = require('socket.io-client');
var async = require('async');
var _ = require('lodash');
var params = {min: 1000, lcport: 12345};
http.createServer(function (req, res) {
	var x = {};
	var serverlist = portlist.query('sa-webapp');
	if (!serverlist.length) {
		res.writeHead(503, {'Content-Type' : 'text/plain'});
		res.end('No servers available to service your request');
		return;
	}
	for(var p in serverlist){
		var flag = 'port' + serverlist[p].port;
		console.log(flag);
		(function(flag) {
			x[flag] = socketio.connect('http://localhost:' + serverlist[p].port, { 'force new connection':true });
			console.log('connected ' + flag)
		})(flag);
	}
	async.each(x, function(q, next) {
		q.once('conncount', function(data){
			var portkey = (_.findKey(x, q));
			console.log(portkey.substring(4) + ' connected, count = ' + data.count);
			if(data.count <= params.min){
				params.min = data.count;
				params.lcport = portkey.substring(4)
			}
			console.log('value of min is ' + params.min + ' and port is ' + params.lcport);
		})
		next();
	})



//    proxyservice.web(req, res, { target: ('http://localhost:'+ lcport)}); 


//    i = (i + 1) % serverlist.length;
//    proxyservice.web(req, res, { target: ('http://localhost:'+ serverlist[i].port)});   
}).listen(args[0] || 8000);